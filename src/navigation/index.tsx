import * as React from 'react'
import { Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Icon from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ContactsScreen from '../screens/ContactsScreen'
import CallcenterScreen from '../screens/CallcenterScreen'
import HeaderButton from '../components/common/HeaderButton'
import DrawerContent from './Drawer'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={HomeStackNavigator} />
    </Drawer.Navigator>
  )
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InitialScreen"
        component={TabsNavigator}
        options={(navData) => ({
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Image
              style={{ width: 80, height: 50 }}
              source={{
                uri:
                  'https://partneri.shoptet.cz/wp-content/uploads/2019/10/ipex-2019-rgb_ipex-color_400x400px.jpg',
              }}
            />
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Menu"
                iconName="person-circle-outline"
                onPress={() => navData.navigation.toggleDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

function TabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => <Icon name="people-outline" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Callcenter"
        component={CallcenterScreen}
        options={{
          tabBarLabel: 'Callcenter',
          tabBarIcon: ({ color, size }) => <Icon name="call-outline" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  )
}
