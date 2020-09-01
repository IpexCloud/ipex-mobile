import { useFetch } from 'use-http'
import AsyncStorage from '@react-native-community/async-storage'
import config from '../../config'
import { Architecture } from '../lib/types'

export type LoginServiceData = {
  authToken: string
  refreshToken: string
  userId: string
  firstName: string
  lastName: string
  email: string
  pbxRoles: string[]
}

export type LoginCommands = {
  login: (credentials: { email: string; password: string }) => Promise<LoginServiceData | void>
  logout: () => Promise<void>
}

const useLoginService: Architecture.ServiceHook<{}, LoginCommands> = () => {
  const { post, response, loading, error } = useFetch(`${config.CENTRAL_API_URL}/v1/sso/login`)

  const login = async (credentials: { email: string; password: string }) => {
    const loginData = await post(credentials)
    if (response.ok) {
      await AsyncStorage.setItem('credentials', JSON.stringify(credentials))
      const userData = {
        authToken: loginData.accessToken || '',
        refreshToken: loginData.refreshToken || '',
        userId: loginData.userId || '',
        firstName: loginData.firstName || '',
        lastName: loginData.lastName || '',
        email: loginData.email || '',
        pbxRoles: loginData.pbxRoles || [],
        expiresAt: loginData.expiresAt || '',
      }
      await AsyncStorage.setItem('userData', JSON.stringify(userData))
      return userData
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('credentials')
    await AsyncStorage.removeItem('userData')
  }

  return [
    {
      commands: {
        login,
        logout,
      },
      queries: {},
    },
    { error, loading },
  ]
}

export { useLoginService }
