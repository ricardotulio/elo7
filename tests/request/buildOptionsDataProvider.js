export const uri = 'https://www.elo7.com.br/login.do'

export const method = 'POST'

export const data = {
  redirect: '/',
  command: 'login',
  email: 'john.due@email.com',
  password: '123456',
}

export const expected = {
  method: 'POST',
  uri: 'https://www.elo7.com.br/login.do',
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0',
  },
  form: {
    redirect: '/',
    command: 'login',
    email: 'john.due@email.com',
    password: '123456',
  },
}
