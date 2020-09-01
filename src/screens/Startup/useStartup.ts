import { useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import { useLoginService } from '../../services'
import { useGlobalDispatch } from '../../context'

import { Architecture } from '../../lib/types'

const useStartup: Architecture.ConcernSeparationHook<{}, {}> = () => {
  const dispatch = useGlobalDispatch()
  const [{ commands }] = useLoginService()

  const renewLogin = async () => {
    const credentials = await AsyncStorage.getItem('credentials')
    if (credentials) {
      const newLoginData = await commands.login(JSON.parse(credentials))
      if (newLoginData) {
        dispatch({ type: 'auth/login', payload: newLoginData })
      }
    }
    dispatch({ type: 'auth/autoLogin', payload: true })
  }

  useEffect(() => {
    const tryLogin = async () => {
      const userStorageData = await AsyncStorage.getItem('userData')

      if (!userStorageData) {
        await renewLogin()
        return
      }
      const userData = JSON.parse(userStorageData)
      const { expiresAt } = userData

      // Token already expired, try new login with saved credentials
      if (new Date(expiresAt) <= new Date()) {
        await renewLogin()
      } else {
        dispatch({ type: 'auth/login', payload: userData })
        dispatch({ type: 'auth/autoLogin', payload: true })
      }
    }

    tryLogin()
  }, [])

  return {
    operations: {},
    models: {},
  }
}

export default useStartup
