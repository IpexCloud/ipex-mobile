import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerContent from './DrawerContent'
import { TabsNavigator } from '../tabs/TabsNavigator'

const Drawer = createDrawerNavigator<DrawerParamList>()

export type DrawerParamList = {
  Appbar: undefined
}

export function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Appbar" component={TabsNavigator} />
    </Drawer.Navigator>
  )
}
