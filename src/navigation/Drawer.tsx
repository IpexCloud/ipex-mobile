import * as React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/Ionicons'

export default function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Text style={styles.title}>Sebastian Mach</Text>
          <Text style={styles.caption}>IPEX a.s.</Text>
        </View>
        <DrawerItem
          icon={({ color, size }) => <Icon name="settings-outline" color={color} size={size} />}
          label="Profile"
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
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
