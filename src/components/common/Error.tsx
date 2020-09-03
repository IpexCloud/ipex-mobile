import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Icon } from 'react-native-elements'

import Text from './Text'
import colors from '../../constants/colors'
import layout from '../../constants/layout'

type Props = {
  reason?: string
}

const Error = (props: Props) => {
  return (
    <View style={styles.container}>
      <Icon name="error-outline" color={colors.gray400} size={layout.window.height / 20} />
      <Text style={styles.errorText}>{props.reason || 'Nastala chyba v aplikaci'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  errorText: {
    marginVertical: layout.font.medium,
    color: colors.gray400,
  },
})

export default Error
