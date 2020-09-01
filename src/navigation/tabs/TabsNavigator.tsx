import * as React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import colors from '../../constants/colors'
import { Contacts, Callcenter, ContactDetail, Dialpad } from '../../screens'
import { Contact } from '../../services'
import layout from '../../constants/layout'

export type TabsNavigatorParamList = {
  Contacts: undefined
  Callcenter: undefined
  Dialpad: undefined
}
export type ContactsNavigatorParamList = {
  ContactsList: undefined
  ContactDetail: Contact
  Dialpad:
    | {
        number?: string
      }
    | undefined
}

const Tab = createBottomTabNavigator<TabsNavigatorParamList>()

// TODO: separate contacts navigator
const ContactsStackNavigator = createStackNavigator<ContactsNavigatorParamList>()

const ContactsNavigator = () => {
  return (
    <ContactsStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          height: layout.window.height / 8,
          backgroundColor: colors.background,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <ContactsStackNavigator.Screen
        name="ContactsList"
        component={Contacts}
        options={{ headerShown: false }}
      />
      <ContactsStackNavigator.Screen
        name="ContactDetail"
        component={ContactDetail}
        options={{ headerTitle: '' }}
      />
    </ContactsStackNavigator.Navigator>
  )
}

export function TabsNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.gray300,
        style: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsNavigator}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="people" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Dialpad"
        component={Dialpad}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="call" color={color} size={size} />,
        }}
      />

      <Tab.Screen
        name="Callcenter"
        component={Callcenter}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="headset" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
