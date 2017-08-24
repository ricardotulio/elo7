import cheerio from 'cheerio'
import { 
  always,
  applySpec,
  curry,
  map,
  pipe,
  trim,
  __,
} from 'ramda'

const toArray = elem => elem.toArray()

const text = elem => elem.text()

const list = pipe(
  $ => $('.orders'),
  toArray,
)

const bindOrder = $ => {
  const bindScope = scope => $.bind(scope)

  return map(
    bindScope,
    list($),
  )
}

const scrapInfo = fn => 
  pipe(
    $ => $(fn()),
    text,
    trim,
  )

const customerName = always('.customer-name')
const amount = always('.amount')

const customer = applySpec({
  customer: {
    name: scrapInfo(customerName),
  },
  amount: scrapInfo(amount)
})

const scrap = pipe(
  cheerio.load,
  bindOrder,
  map(customer),
)
  
export default scrap
