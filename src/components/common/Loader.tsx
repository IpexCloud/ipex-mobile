import React from 'react'
import { StyleSheet, ActivityIndicator, ActivityIndicatorProps } from 'react-native'

import colors from '../../constants/colors'

const Loader = (props: ActivityIndicatorProps) => {
  return <ActivityIndicator size="large" color={colors.primary} style={styles.loader} {...props} />
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Loader
