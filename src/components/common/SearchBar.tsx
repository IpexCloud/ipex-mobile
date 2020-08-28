import React from 'react'
import { SearchBar as SearchBarElement } from 'react-native-elements'

type SearchBarProps = {
  value?: string
  placeholder?: string
  isLoading?: boolean
  onChangeText?: (text: string) => void
}

const SearchBar = ({ placeholder, value, isLoading, onChangeText, ...props }: SearchBarProps) => (
  <SearchBarElement
    platform="ios"
    placeholder={placeholder}
    showLoading={isLoading}
    onChangeText={onChangeText}
    value={value}
    {...props}
  />
)

export default SearchBar
