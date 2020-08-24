export namespace Architecture {
  export type ConcernSeparationHook<O extends {}, M extends {}, T> = (
    options: T
  ) => {
    operations: O
    models: M
  }

  export type ServiceError = any

  export type ServiceState<T> = {
    loading: boolean
    error: ServiceError
    data: T
  }

  export type ServiceHook<T> = () => ServiceState<T>
}
