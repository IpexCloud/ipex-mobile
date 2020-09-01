import update from 'immutability-helper'

import { GlobalContext } from '../lib/types'

const setAuth = (
  state: GlobalContext.State,
  action: GlobalContext.SetAuth
): GlobalContext.State => {
  return update(state, {
    auth: { $set: action.payload },
  })
}

const setTryAutoLogin = (
  state: GlobalContext.State,
  action: GlobalContext.SetTryAutoLogin
): GlobalContext.State => {
  return update(state, {
    tryAutoLogin: { $set: action.payload },
  })
}

const reducer = (state: GlobalContext.State, action: GlobalContext.Actions) => {
  switch (action.type) {
    case 'auth/login':
      return setAuth(state, action)
    case 'auth/autoLogin':
      return setTryAutoLogin(state, action)
    default:
      console.error('[GlobalContext] Unhandled action type ', action.type)
      return state
  }
}

export default reducer
