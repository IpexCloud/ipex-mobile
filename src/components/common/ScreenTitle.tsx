import React from 'react'
import { Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'

const screenTitleStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
})

type ScreenTitleProps = {
  text: string
}

const ScreenTitle = ({ text }: ScreenTitleProps) => (
  <Text h4 style={screenTitleStyles.container}>
    {text}
  </Text>
)

export default ScreenTitle
