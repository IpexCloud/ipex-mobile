import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar, Text, Divider } from 'react-native-elements'

import { useGlobalContext } from '../../context'
import colors from '../../constants/colors'

export default function DrawerContent(props) {
  const {
    auth: { firstName, lastName, email },
  } = useGlobalContext()

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar
            size="medium"
            rounded
            source={{
              uri:
                'https://thumbs.dreamstime.com/b/call-center-agent-isolated-white-background-57688768.jpg',
            }}
          />
          <Text h4 style={styles.title}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.caption}>{email}</Text>
        </View>
        <Divider style={{ backgroundColor: colors.secondaryText, marginVertical: '5%' }} />
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
    fontWeight: 'bold',
  },
  caption: {
    lineHeight: 24,
  },
})
