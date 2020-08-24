import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

import { ContactListItem } from '../../components'
import { SearchBar, ScreenTitle } from '../../components/common'

import useContacts from './useContacts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  actionButton: {
    borderRadius: 5,
    paddingHorizontal: 14,
    marginRight: 10,
    backgroundColor: '#afbf27',
  },
  actionButtonIcon: {
    marginRight: 10,
  },
})

const Contacts = () => {
  const { operations, models } = useContacts()
  return (
    <TouchableWithoutFeedback onPress={operations.handleContainerPress}>
      <View style={styles.container}>
        <ScreenTitle text="Contacts" />
        <SearchBar
          placeholder="Search contacts"
          value={models.searchText}
          onChangeText={operations.handleSearchTextChange}
        />
        <View>
          {models.contacts.map((contact) => (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              isActive={models.activeContact === contact.id}
              ActionTools={
                <>
                  <Button
                    buttonStyle={styles.actionButton}
                    icon={
                      <Icon name="call" size={15} color="white" style={styles.actionButtonIcon} />
                    }
                    title="Call now"
                  />
                  <Button
                    buttonStyle={styles.actionButton}
                    title="Call PBX"
                    icon={
                      <Icon name="call" size={15} color="white" style={styles.actionButtonIcon} />
                    }
                  />
                </>
              }
              onPress={() => operations.handleContactPress(contact.id)}
            />
          ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Contacts
