import buildOptions from '../../src/request/buildOptions'
import {
  method,
  uri,
  data,
  expected,
} from './buildOptionsDataProvider'

test('if can build options', () => {
  expect(buildOptions(method, uri, data)).toEqual(expected)
})
