import { 
  curry,
  merge,
} from 'ramda'

const defaultOptions = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0',
  },
  form: {},
}

const buildOptions = curry((method, uri, data) => {
  return merge(
    defaultOptions,
    {
      method,
      uri,
      form: data
    }
  )
})

export default buildOptions
