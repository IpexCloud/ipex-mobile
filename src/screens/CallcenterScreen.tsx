import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Picker from '../components/common/Picker'
import colors from '../constants/colors'
export default function CallcenterScreen() {
  return (
    <View style={styles.screen}>
      <Text>CALLCENTER</Text>
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
    backgroundColor: colors.background,
  },
})
