import requestPromise from 'request-promise'
import { prop } from 'ramda'
import request from '../request'
import bindSession from './bindSession'

import resources from '../resources'

const connect = (credentials) => {
  const session = requestPromise.jar()

  const data = {
    redirect: '/',
    command: 'login',
    email: prop('email', credentials),
    password: prop('password', credentials),
  }

  return request.post(session, '/login.do', data)
    .catch(error => bindSession(session, resources))
}

export default connect
