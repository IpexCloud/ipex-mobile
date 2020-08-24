import * as React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'
import layout from '../../constants/layout'

export default function AppbarLogo() {
  return (
    <Image
      style={styles.image}
      PlaceholderContent={<ActivityIndicator />}
      source={{
        uri:
          'https://partneri.shoptet.cz/wp-content/uploads/2019/10/ipex-2019-rgb_ipex-color_400x400px.jpg',
      }}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: layout.window.width / 5,
    height: layout.window.height / 10,
  },
})
