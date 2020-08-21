import * as React from 'react'
import { Avatar, Badge } from 'react-native-elements'
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

export default function AppbarAvatar(props: Props) {
  return (
    <Avatar
      rounded
      containerStyle={styles.avatar}
      onPress={() => props.navigation.toggleDrawer()}
      source={{
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      }}
    >
      <Badge status="success" containerStyle={styles.badge} />
    </Avatar>
  )
}

const styles = StyleSheet.create({
  avatar: {
    marginHorizontal: 10,
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
  },
})
