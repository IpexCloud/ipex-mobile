import * as React from 'react'
import { Picker } from '@react-native-community/picker'

type Props = {
  options: {
    label: string
    value: string
  }[]
  value: string
  onChange: (value: string, index: number) => void
  disabled?: boolean
}

export default function CustomPicker(props: Props) {
  return (
    <Picker
      selectedValue={props.value}
      onValueChange={(itemValue, itemIndex) => props.onChange(itemValue.toString(), itemIndex)}
      enabled={!props.disabled}
      {...props}
    >
      {props.options.map((option) => (
        <Picker.Item label={option.label} value={option.value} key={option.value} />
      ))}
    </Picker>
  )
}
