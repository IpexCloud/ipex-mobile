import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar, Divider } from 'react-native-elements'
import { Text } from '../../components/common'

import { useGlobalContext } from '../../context'

export default function DrawerContent(props: DrawerContentComponentProps) {
  const {
    auth: { firstName, lastName, email },
  } = useGlobalContext()

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar
            size="large"
            rounded
            title={firstName[0].toUpperCase() + lastName[0].toUpperCase()}
          />
          <Text style={styles.title} weight="regular" size="large">
            {firstName} {lastName}
          </Text>
          <Text style={styles.caption} size="xsmall">
            {email}
          </Text>
        </View>
        <Divider style={styles.divider} />
        <DrawerItem
          icon={({ color, size }) => <Icon name="log-out-outline" color={color} size={size} />}
          label="Odhlásit"
          onPress={() => {}}
        />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    marginTop: '10%',
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
  },
  caption: {
    lineHeight: 24,
  },
  divider: {
    marginVertical: '5%',
  },
})
