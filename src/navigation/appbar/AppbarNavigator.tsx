import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AppbarAvatar from './AppbarAvatar'
import AppbarLogo from './AppbarLogo'
import colors from '../../constants/colors'
import layout from '../../constants/layout'
import { TabsNavigator } from '../tabs/TabsNavigator'

export type AppbarParamList = {
  Tabs: undefined
}

const Stack = createStackNavigator<AppbarParamList>()

export function AppbarNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: layout.window.height / 10,
          backgroundColor: colors.background,
        },
        headerTintColor: colors.primaryText,
      }}
    >
      <Stack.Screen
        name="Tabs"
        component={TabsNavigator}
        options={(navData) => ({
          headerTitleAlign: 'center',
          headerTitle: () => <AppbarLogo />,
          headerLeft: () => <AppbarAvatar {...navData} />,
        })}
      />
    </Stack.Navigator>
  )
}