import * as React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'

import layout from '../../constants/layout'

const styles = StyleSheet.create({
  image: {
    width: layout.window.width / 5,
    height: layout.window.width / 16,
  },
})


const AppbarLogo = () => {
  return (
    <Image
      style={styles.image}
      PlaceholderContent={<ActivityIndicator />}
      source={require('../../../assets/ipex_logo.png')}
    />
  )
}

export default AppbarLogo