import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from '../../screens/'
import colors from '../../constants/colors'

export type AuthParamList = {
  Login: undefined
}

const AuthStackNavigator = createStackNavigator<AuthParamList>()

const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="Login"
        component={Login}
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

export default AuthNavigator