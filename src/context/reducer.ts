// @flow
import update from 'immutability-helper'

import { GlobalContext } from '../lib/types'

const setAuth = (state: GlobalContext.State, action: GlobalContext.Actions): GlobalContext.State => {
    return update(state, {
        auth: { $set: action.payload }
    })
}


const reducer = (state: GlobalContext.State, action: GlobalContext.Actions) => {
    switch (action.type) {
        case 'auth/login':
            return setAuth(state, action)
        default:
            console.error('[GlobalContext] Unhandled action type ', action.type)
            return state
    }
}

export default reducer
