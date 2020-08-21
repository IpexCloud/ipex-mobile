import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthNavigator } from './auth/AuthNavigator'
import { DrawerNavigator } from './drawer/DrawerNavigator'

export default function AppNavigator() {
  const isAuth = true
  const didTryAutoLogin = true

  return (
    <NavigationContainer>
      {isAuth && <DrawerNavigator />}
      {!isAuth && didTryAutoLogin && <AuthNavigator />}
      {/* {!isAuth && !didTryAutoLogin && <StartupScreen />} */}
    </NavigationContainer>
  )
}
