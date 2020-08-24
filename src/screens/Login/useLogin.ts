import { useState } from 'react'

import { Architecture } from '../../lib/types'

type LoginOperations = {
  handleLogin: () => void
  updateCredentials: (data: { email: string } | { password: string }) => void
}

type LoginModels = {
  credentials: {
    email: string
    password: string
  }
  login: Architecture.ServiceState
}

const useLogin: Architecture.ConcernSeparationHook<LoginOperations, LoginModels, void> = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  // const [{queries, commands}] = useLoginService()

  const handleLogin = () => {
    // commands.login
  }

  const updateCredentials = (data: { email: string } | { password: string }) =>
    setCredentials((state) => ({ ...state, ...data }))

  return {
    operations: {
      handleLogin,
      updateCredentials,
    },
    models: {
      credentials,
      login: {
        loading: false,
        error: null,
      },
    },
  }
}

export default useLogin
