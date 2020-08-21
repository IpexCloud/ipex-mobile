import React from 'react'
import { SearchBar as SearchBarElement } from 'react-native-elements'

type SearchBarProps = {
    value?: string
    placeholder?: string
    isLoading?: boolean
    onChangeText?: (text: string) => void
}

const SearchBar = ({ placeholder, value, isLoading, onChangeText, ...props }: SearchBarProps) =>
    <SearchBarElement
        platform="ios"
        inputContainerStyle={{
            backgroundColor: "#eaeaea"
        }}
        containerStyle={{
            marginVertical: 5,
            backgroundColor: "#fff"
        }}
        placeholder={placeholder}
        showLoading={isLoading}
        onChangeText={onChangeText}
        value={value}
    />


export default SearchBar