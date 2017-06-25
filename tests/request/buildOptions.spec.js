import buildOptions from '../../src/request/buildOptions'
import {
  uri,
  method,
  data,
  expected,
} from './buildOptionsDataProvider'

test('if can build options', () => {
  expect(buildOptions(uri, method, data)).toBe(expected)
})
