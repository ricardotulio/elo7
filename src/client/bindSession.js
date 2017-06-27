import {
  assoc,
  equals,
  ifElse,
  type,
  map,
} from 'ramda'

const isFunction = x => equals(type(x), 'Function')

const bindSession = (session, resources) => {
  const bind = func => func(session)

  const bindRecursive = ifElse(
    isFunction,
    bind,
    resource => map(bindRecursive, resource)
  )

  return map(bindRecursive, resources)
}

export default bindSession
