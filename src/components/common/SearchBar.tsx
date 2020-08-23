import React from 'react'
import { SearchBar as SearchBarElement } from 'react-native-elements'
import { StyleSheet } from 'react-native'

type SearchBarProps = {
  value?: string
  placeholder?: string
  isLoading?: boolean
  onChangeText?: (text: string) => void
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  inputSearch: {
    backgroundColor: '#e5e5e5',
  },
})

const SearchBar = ({ placeholder, value, isLoading, onChangeText, ...props }: SearchBarProps) => (
  <SearchBarElement
    platform="ios"
    inputContainerStyle={styles.inputSearch}
    containerStyle={styles.container}
    placeholder={placeholder}
    showLoading={isLoading}
    onChangeText={onChangeText}
    value={value}
    {...props}
  />
)

export default SearchBar
