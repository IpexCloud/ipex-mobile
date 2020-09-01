import React from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../../constants/colors'
import { Loader } from '../../components/common'
import useStartup from './useStartup'

const StartupScreen = () => {
  useStartup()

  return (
    <View style={styles.screen}>
      <Loader />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
})

export default StartupScreen
