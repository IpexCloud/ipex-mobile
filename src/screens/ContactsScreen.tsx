import React, { useState } from 'react'
import { View, Button } from 'react-native'

import { ContactList, ContactListItem } from "../components/ContactList"
import { SearchBar, ScreenTitle } from '../components/common'

const contactsMock = [
  {
    name: "Jakub Konecny",
    number: "+421768765453"
  },
  {
    name: "Sebo Krach",
    number: "+421768765453"
  },
  {
    name: "Pepek Namornik",
    number: "+421768765453",
    isActive: true
  },
  {
    name: "Rest Inpeace",
    number: "+421768765453"
  },
  {
    name: "What Thefuck",
    number: "+421768765453",

  }
]

export default function ContactsScreen() {
  const [selectedContact, setSelectedContact] = useState("")
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff"
    }
    }>
      <ScreenTitle text="Contacts" />
      <SearchBar placeholder="Vyhledat kontakt" value="Sebo Mach" />
      <ContactList>
        {contactsMock.map(contact =>
          <ContactListItem
            key={contact.name}
            name={contact.name} number={contact.number} isActive={selectedContact === contact.name}
            onPress={() => setSelectedContact(contact.name)}
          />)}
      </ContactList>
    </View>
  )
}
