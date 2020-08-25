export namespace Architecture {
  export type ConcernSeparationHook<O extends {}, M extends {}, T = void> = (
    options: T
  ) => {
    operations: O
    models: M
  }

  export type ServiceError = any

  export type ServiceState = {
    loading: boolean
    error: ServiceError
  }

  export type Service<Q, C> = [
    {
      queries: Q
      commands: C
    },
    ServiceState
  ]

  export type ServiceHook<Q, C> = () => Service<Q, C>
}

export namespace GlobalContext {
  export type State = {
    auth: {
      [key: string]: any
    }
  }

  type SetAuth = {
    type: 'auth/login',
    payload: {
      [key: string]: any
    }
  }

  export type Actions = SetAuth

  export type Dispatch = (action: Actions) => void
}
