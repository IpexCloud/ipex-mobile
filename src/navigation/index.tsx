import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider, CachePolicies, IncomingOptions, Res } from 'use-http'
import AsyncStorage from '@react-native-community/async-storage'

import config from '../../config'
import AuthNavigator from './auth/AuthNavigator'
import { DrawerNavigator } from './drawer/DrawerNavigator'
import { useGlobalContext, useGlobalDispatch } from '../context'
import { Startup } from '../screens'
import { useLoginService } from '../services/useLoginService'

export default function AppNavigator() {
  const { auth, tryAutoLogin } = useGlobalContext()
  const dispatch = useGlobalDispatch()
  const [{ commands }] = useLoginService()

  const isAuth = !!auth.authToken

  // TODO: separate to another file
  const defaultOptions = {
    headers: {
      Authorization: `Bearer ${auth.authToken}`,
    },
    loading: true,
    cachePolicy: CachePolicies.NETWORK_ONLY,
    interceptors: {
      request: async ({ options }: { options: IncomingOptions }) => {
        // Check if token is expired or will be in 1 minute
        if (new Date(auth.expiresAt) < new Date(new Date().getTime() + 60000)) {
          const credentials = await AsyncStorage.getItem('credentials')

          if (credentials) {
            const newLoginData = await commands.login(JSON.parse(credentials))

            if (newLoginData) {
              dispatch({ type: 'auth/login', payload: newLoginData })
              // Update token in headers
              options = {
                ...options,
                headers: {
                  ...options.headers,
                  Authorization: `Bearer ${newLoginData.authToken}`,
                },
              }
            }
          }
        }

        return options
      },
      response: async ({ response }: { response: Res<{ statusCode: number }> }) => {
        if (response?.data?.statusCode === 401) {
          await commands.logout()
        }
        return response
      },
    },
  }

  return (
    <NavigationContainer>
      {isAuth && (
        <Provider url={config.IPBX_API_URL} options={defaultOptions}>
          <DrawerNavigator />
        </Provider>
      )}
      {!isAuth && tryAutoLogin && <AuthNavigator />}
      {!isAuth && !tryAutoLogin && <Startup />}
    </NavigationContainer>
  )
}
