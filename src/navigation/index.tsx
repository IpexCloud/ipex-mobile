import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthNavigator from './auth/AuthNavigator'
import { DrawerNavigator } from './drawer/DrawerNavigator'
import { useGlobalContext } from '../context'

export default function AppNavigator() {
  const { auth } = useGlobalContext()
  const isAuth = !!auth.authToken

  return (
    <NavigationContainer>
      {isAuth ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}
