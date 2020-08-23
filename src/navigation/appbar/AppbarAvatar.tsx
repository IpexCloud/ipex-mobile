import * as React from 'react'
import { Avatar } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { CompositeNavigationProp } from '@react-navigation/native'
import { DrawerNavigationProp } from '@react-navigation/drawer'

import { AppbarParamList } from './AppbarNavigator'
import { DrawerParamList } from '../drawer/DrawerNavigator'

type Props = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList>,
    StackNavigationProp<AppbarParamList, 'Tabs'>
  >
}

const styles = StyleSheet.create({
  avatar: {
    marginLeft: 10,
  },
})

const AppbarAvatar = (props: Props) => {
  return (
    <Avatar
      rounded
      containerStyle={styles.avatar}
      onPress={() => props.navigation.toggleDrawer()}
      source={{
        uri:
          'https://thumbs.dreamstime.com/b/call-center-agent-isolated-white-background-57688768.jpg',
      }}
    />
  )
}

export default AppbarAvatar
