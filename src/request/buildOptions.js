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

const buildOptions = curry((method, path, data) =>
  merge(
    defaultOptions,
    {
      method,
      uri: `https://www.elo7.com.br${path}`,
      form: data,
    },
  ),
)

export default buildOptions
