import { useState } from 'react'

import { useLoginService } from '../../services'
import { useGlobalDispatch } from '../../context'

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
  const dispatch = useGlobalDispatch()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })
  const [{ commands }, loginState] = useLoginService()

  const handleLogin = () => {
    commands.login(credentials).then(loginData => loginData && dispatch({
      type: 'auth/login',
      payload: loginData
    }))
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
      login: loginState,
    },
  }
}

export default useLogin
