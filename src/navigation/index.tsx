import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'use-http'

import config from '../../config'
import AuthNavigator from './auth/AuthNavigator'
import { DrawerNavigator } from './drawer/DrawerNavigator'
import { useGlobalContext } from '../context'

export default function AppNavigator() {
  const { auth } = useGlobalContext()
  const isAuth = !!auth.authToken

  const options = {
    headers: {
      Authorization: `Bearer ${auth.authToken}`,
    },
    loading: true,
    // interceptors: {
    //   request: async ({ options }: { options: IncomingOptions }) => {
    //     // TODO: check token expire
    //     options.headers = {
    //       ...options.headers,
    //       Authorization: `Bearer ${config.TOKEN}`,
    //     }
    //     options.loading = true

    //     return options
    //   },
    // },
  }

  return (
    <NavigationContainer>
      {isAuth ? (
        <Provider url={config.IPBX_API_URL} options={options}>
          <DrawerNavigator />
        </Provider>
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  )
}
