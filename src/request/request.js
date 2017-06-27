import buildOptions from './buildOptions'
import requestPromise from 'request-promise'
import {
  curry,
  pipe,
  merge,
  __,
} from 'ramda'

const request = curry((session, method, path, data) =>
  requestPromise(merge({ jar: session }, buildOptions(method, path, data)))
)

export default {
  get: request(__, 'GET'),
  post: request(__, 'POST'),
}
