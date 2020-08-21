import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar, Text, Divider } from 'react-native-elements'

import colors from '../../constants/colors'

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar
            size="medium"
            rounded
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}
          />
          <Text h4 style={styles.title}>
            Sebastian Mach
          </Text>
          <Text style={styles.caption}>IPEX a.s.</Text>
        </View>
        <Divider style={{ backgroundColor: colors.secondaryText, marginVertical: '5%' }} />
        <DrawerItem
          icon={({ color, size }) => <Icon name="settings-outline" color={color} size={size} />}
          label="Callcenter settings"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => <Icon name="log-out-outline" color={color} size={size} />}
          label="Logout"
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
    lineHeight: 14,
  },
})
