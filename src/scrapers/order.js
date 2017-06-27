import cheerio from 'cheerio'
import {
  curry,
  map,
} from 'ramda'

const scrapOrder = curry(($, element) => {
  return {
    customer: $('.store span.store-name', element).text(),
    number: $('a.order-title', element).text(),
    date: $('.details time', element).text(),
    value: $('span.price', element).text(),
  }
})

const toArray = element => element.toArray

export const scrapOrders = rawBody => {
  const mapOrders = $ =>
    map(scrapOrder($), $('ol.orders-list li.order').toArray())

  return mapOrders(cheerio.load(rawBody))
}

export default {
  scrapOrders
}
