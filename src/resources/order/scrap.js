import cheerio from 'cheerio'
import { 
  applySpec,
  map,
  pipe,
  trim,
} from 'ramda'

const toArray = elem => elem.toArray()

const text = elem => elem.text()

const list = pipe(
  $ => $('.orders'),
  toArray,
)

const customerName = () => 'Maria'

// const customerName = selector => order => 
//   text(selector('.customer-name', order))

const customer = applySpec({
  customer: {
    name: customerName,
  },
})

const scrap = pipe(
  cheerio.load,
  list,
  map(customer),
)
  
export default scrap
