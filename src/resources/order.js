import { load } from 'cheerio'
import moment from 'moment'
import {
  always,
  concat,
  cond,
  curry,
  divide,
  gt,
  ifElse,
  inc,
  length,
  map,
  not,
  pipe,
  replace,
  test,
  __,
} from 'ramda'
import request from '../request'
import routes from '../routes'

const toArray = element => element.toArray()

const hasNextPage = selector =>
  not(selector('.pagination').children().last().hasClass('disabled'))

const hasOrders = selector => pipe(
    selector => selector('ol.orders-list li.order'),
    length,
    gt(__, 0),
  )

const getCustomerName = (selector, element) =>
  selector('.store span.store-name', element).text()

const getOrderNumber = (selector, element) =>
  replace('Pedido ', '', selector('a.order-title', element).text())

const getOrderStatus = pipe(
  (selector, element) => selector('.alert', element).text(),
  cond([
    [test(/confirmar o recebimento/), always('shipping')],
    [test(/cancelou este pedido/), always('canceled')],
    [test(/finalizada com sucesso/), always('finished')],
    [test(/finalizou o pedido/), always('finished')],
    [test(/efetuar o pagamento/), always('waiting_payment')],
    [test(/confirmação do pagamento/), always('processing')],
  ]),
)

const getOrderDate = (selector, element) =>
  moment(
    selector('.details time', element).text(),
    'DD-MM-YYYY',
  ).format('YYYY-MM-DD')

const toFixed = curry((number, precision) => number.toFixed(precision))

const getOrderValue = pipe(
  (selector, element) =>
    replace(/[^0-9]/g, '', selector('span.price', element).text()),
  parseInt,
  divide(__, 100),
  toFixed(__, 2),
)

const getOrderInfo = curry((selector, element) => ({
  customer_name: getCustomerName(selector, element),
  order_number: getOrderNumber(selector, element),
  date: getOrderDate(selector, element),
  value: getOrderValue(selector, element),
  status: getOrderStatus(selector, element),
}))

const scrap = ifElse(
    hasOrders,
    selector => map(
      getOrderInfo(selector),
      toArray(selector('ol.orders-list li.order')),
    ),
    () => [],
  )

const list = curry((session, page) => {
  const next = selector =>
    list(session, inc(page))
      .then(concat(scrap(selector)))

  const scrapRecursive = ifElse(
    hasNextPage,
    next,
    scrap,
  )

  return request.get(session, routes.order.list(page), {})
    .then(load)
    .then(scrapRecursive)
})

export default {
  list: session => () => list(session, 1),
}
