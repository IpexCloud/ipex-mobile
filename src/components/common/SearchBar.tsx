import React from 'react'
import { StyleSheet, Platform } from 'react-native'
import { SearchBar as SearchBarElement } from 'react-native-elements'

import colors from '../../constants/colors'

type SearchBarProps = {
  value?: string
  placeholder?: string
  isLoading?: boolean
  onChangeText?: (text: string) => void
}

const SearchBar = ({ placeholder, value, isLoading, onChangeText, ...props }: SearchBarProps) => (
  <SearchBarElement
    platform={Platform.OS === 'ios' ? 'ios' : 'android'}
    placeholder={placeholder}
    containerStyle={styles.containerStyle}
    showLoading={isLoading}
    onChangeText={onChangeText}
    value={value}
    {...props}
  />
)

const styles = StyleSheet.create({
  containerStyle: {
    ...Platform.select({
      android: {
        marginHorizontal: '2.5%',
      },
    }),
  },
})

export default SearchBar
