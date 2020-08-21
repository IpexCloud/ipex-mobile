import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../../screens/LoginScreen'
import colors from '../../constants/colors'

export type AuthParamList = {
  Login: undefined
}

const AuthStackNavigator = createStackNavigator<AuthParamList>()

export function AuthNavigator() {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: '',
          headerTransparent: true,
          cardStyle: {
            backgroundColor: colors.primaryText,
          },
        }}
      />
    </AuthStackNavigator.Navigator>
  )
}
