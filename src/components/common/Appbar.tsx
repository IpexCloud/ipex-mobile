import React from 'react'
import { StyleSheet, ActivityIndicator } from 'react-native'
import { Header, Avatar, Image } from 'react-native-elements'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'

import { useGlobalContext } from '../../context'
import layout from '../../constants/layout'

import { TabsNavigatorParamList } from '../../navigation/tabs/TabsNavigator'
import { DrawerParamList } from '../../navigation/drawer/DrawerNavigator'

type AppbarProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabsNavigatorParamList>,
    DrawerNavigationProp<DrawerParamList>
  >
}

const appbarAvatarStyles = StyleSheet.create({
  avatar: {
    marginLeft: 10,
  },
})

const AppbarAvatar = (props: AppbarProps) => {
  const {
    auth: { firstName, lastName },
  } = useGlobalContext()

  return (
    <Avatar
      rounded
      containerStyle={appbarAvatarStyles.avatar}
      title={firstName[0].toUpperCase() + lastName[0].toUpperCase()}
      onPress={() => props.navigation.toggleDrawer()}
    />
  )
}

const appbarLogoStyles = StyleSheet.create({
  image: {
    width: layout.window.width / 5,
    height: layout.window.width / 16,
  },
})

const AppbarLogo = () => {
  return (
    <Image
      style={appbarLogoStyles.image}
      PlaceholderContent={<ActivityIndicator />}
      source={require('../../../assets/ipex_logo.png')}
    />
  )
}

const Appbar = (props: AppbarProps) => (
  <Header
    leftComponent={<AppbarAvatar {...props} />}
    centerComponent={<AppbarLogo />}
    containerStyle={appbarStyles.container}
  />
)

const appbarStyles = StyleSheet.create({
  container: {
    elevation: 0,
  },
})

export default Appbar
