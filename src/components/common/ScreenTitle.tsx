import React from 'react'
import { StyleSheet } from 'react-native'

import Text from './Text'

const screenTitleStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
})

type ScreenTitleProps = {
  text: string
}

const ScreenTitle = ({ text }: ScreenTitleProps) => (
  <Text style={screenTitleStyles.container} size="large" weight="medium">
    {text}
  </Text>
)

export default ScreenTitle
