import request from '../request'
import routes from '../routes'
import { scrapOrders } from '../scrapers/order'
import {
  curry,
  pipe,
} from 'ramda'

const list = session =>
  () => request.get(session, routes.order.list, {})
    .then(scrapOrders)

export default {
  list,
}
