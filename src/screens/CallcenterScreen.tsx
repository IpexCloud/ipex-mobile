import * as React from 'react'
import { View, StyleSheet } from 'react-native'

import { ScreenTitle } from '../components/common'
import { CallcenterSettings } from '../components'
import colors from '../constants/colors'

export default function CallcenterScreen() {
  return (
    <View style={styles.screen}>
      <ScreenTitle text="Callcentrum" />
      <CallcenterSettings />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
})
