//@flow
import * as React from 'react'
import { useReducer, useContext, useEffect } from 'react'

import initialState from './initialState'
import reducer from './reducer'

import { GlobalContext } from '../lib/types'

const StoreContext = React.createContext<GlobalContext.State>(initialState)
const DispatchContext = React.createContext<GlobalContext.Dispatch>(() => { })

type GlobalContextProviderProps = {
    children: React.ReactNode
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <StoreContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
        </StoreContext.Provider>
    )
}

const useGlobalContext = () => {
    const context = useContext(StoreContext)
    if (!context) {
        throw new Error('[GlobalContext] useGlobalContext must be used within GlobalContextProvider')
    }
    return context
}

const useGlobalDispatch = () => {
    const context = useContext(DispatchContext)
    if (!context) {
        throw new Error('[GlobalContext] useGlobalDispatch must be used within GlobalContextProvider')
    }
    return context
}

export { useGlobalContext, useGlobalDispatch, GlobalContextProvider }
