import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { ScreenTitle } from '../components/common'

import Picker from '../components/common/Picker'
import colors from '../constants/colors'
export default function CallcenterScreen() {
  return (
    <View style={styles.screen}>
      <ScreenTitle text="Callcentrum" />
      <Picker
        value="WC"
        options={[
          { label: 'WC', value: 'WC' },
          { label: 'Bez pauzy', value: 'nopause' },
        ]}
        onChange={(x, y) => console.log(x, y)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
})
