import * as React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'

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
    width: 80,
    height: 30,
  },
})
