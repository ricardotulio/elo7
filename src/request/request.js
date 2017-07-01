import requestPromise from 'request-promise'
import {
  curry,
  merge,
  __,
} from 'ramda'
import buildOptions from './buildOptions'

const request = curry((session, method, path, data) =>
  requestPromise(merge({ jar: session }, buildOptions(method, path, data))),
)

export default {
  get: request(__, 'GET'),
  post: request(__, 'POST'),
}
