import fs from 'fs'
import { load } from 'cheerio'
import scrap from '../../../src/resources/order/scrap'
import { expectedOrders } from './scrapDataProvider'

test('must scrap order', () => {
  const rawBody = fs.readFileSync(
    './tests/resources/order/orders.html',
    'utf8'
  )

  const orders = scrap(rawBody)

  expect(orders).toEqual(expectedOrders)
})
