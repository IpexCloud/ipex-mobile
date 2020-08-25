import { useState } from 'react'

import { useLoginService } from '../../services'

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

const useLogin: Architecture.ConcernSeparationHook<LoginOperations, LoginModels> = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [{ commands }, loginState] = useLoginService()

  const handleLogin = () => {
    // TODO push to global state
    commands.login(credentials).then(d => console.log("Login data", d))
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
      login: loginState
    },
  }
}

export default useLogin
