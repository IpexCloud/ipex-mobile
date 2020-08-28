/*import * as React from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { AppbarParamList } from './AppbarNavigator'
import { DrawerParamList } from '../drawer/DrawerNavigator'
import { useGlobalContext } from '../../context'

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabsNavigatorParamList>,
    DrawerNavigationProp<DrawerParamList>
  >
}

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 10,
  },
})

const AppbarAvatar = (props: Props) => {
  const {
    auth: { firstName, lastName },
  } = useGlobalContext()

  return (
    <Avatar
      rounded
      containerStyle={styles.avatar}
      title={firstName[0].toUpperCase() + lastName[0].toUpperCase()}
      onPress={() => props.navigation.toggleDrawer()}
    />
  )
}

export default AppbarAvatar

*/
