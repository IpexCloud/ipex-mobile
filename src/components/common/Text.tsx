import React from 'react'
import { TextStyle, StyleProp } from 'react-native'
import { Text } from 'react-native-elements'
import layout from '../../constants/layout'

type Props = {
  weight?: 'light' | 'regular' | 'medium' | 'bold'
  children: React.ReactNode
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  style?: StyleProp<TextStyle>
}

const CustomText = (props: Props) => {
  const { size, weight, style = {} } = props

  const textStyle: StyleProp<TextStyle> = {
    fontFamily: 'Graphik-Regular',
    fontSize: layout.font.small,
  }

  if (size) textStyle.fontSize = layout.font[size]
  if (weight) {
    if (weight === 'light') textStyle.fontFamily = 'Graphik-Light'
    else if (weight === 'medium') textStyle.fontFamily = 'Graphik-Medium'
    else if (weight === 'bold') textStyle.fontFamily = 'Graphik-Bold'
  }

  return (
    <Text {...props} style={{ ...textStyle, ...(style as object) }}>
      {props.children}
    </Text>
  )
}

export default CustomText
