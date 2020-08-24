export namespace Architecture {
  export type ConcernSeparationHook<O extends {}, M extends {}, T> = (
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
