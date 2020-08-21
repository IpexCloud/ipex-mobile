import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerContent from './DrawerContent'
import { AppbarNavigator } from '../appbar/AppbarNavigator'

const Drawer = createDrawerNavigator<DrawerParamList>()

export type DrawerParamList = {
  Appbar: undefined
}

export function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Appbar" component={AppbarNavigator} />
    </Drawer.Navigator>
  )
}
