import * as React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import colors from '../../constants/colors'
import CallcenterScreen from '../../screens/CallcenterScreen'
import ContactsScreen from '../../screens/ContactsScreen'

export type TabsParamList = {
  Contacts: undefined
  Callcenter: undefined
}

const Tab = createBottomTabNavigator<TabsParamList>()

export function TabsNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondaryText,
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => <Icon name="people" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Callcenter"
        component={CallcenterScreen}
        options={{
          tabBarLabel: 'Callcenter',
          tabBarIcon: ({ color, size }) => <Icon name="headset" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
