import { useState } from 'react'
import { remove as removeDiacritics } from 'diacritics'

type ConcertSeparationHook<O extends {}, M extends {}, T> = (
  options: T
) => {
  operations: O
  models: M
}

type ContactsOperations = {
  handleContactPress: (id: string) => void
  handleContainerPress: () => void
  handleSearchTextChange: (text: string) => void
}

type ContactsModels = {
  activeContact: string
  searchText: string
  contacts: any[]
}

// TODO: separate data layer
const _CONTACTS_MOCK_ = [
  {
    id: 1,
    name: 'Jakub Konečný',
    number: '+421768765453',
  },
  {
    id: 2,
    name: 'Sebo Mach',
    number: '+421768765453',
  },
  {
    id: 3,
    name: 'Pepek Námorník',
    number: '+421768765453',
  },
  {
    id: 4,
    name: 'Rest Inpeace',
    number: '+421768765453',
  },
  {
    id: 5,
    name: 'What Thefuck',
    number: '+421768765453',
  },
]

const normalize = (text: string) => removeDiacritics(text.toLowerCase())

const filterContacts = (searchText: string) => (contact: any) => {
  if (searchText === '') {
    return true
  }
  const searchParts = searchText.split(' ')
  return searchParts.some((part) => normalize(contact.name).includes(normalize(part)))
}

const useContacts: ConcertSeparationHook<ContactsOperations, ContactsModels, void> = () => {
  const [activeContact, setActiveContact] = useState('')
  const [searchText, setSearchText] = useState('')

  const handleSearchTextChange = (text: string) => {
    setActiveContact('')
    setSearchText(text)
  }
  const handleContactPress = (id: string) => setActiveContact(id)
  const handleContainerPress = () => setActiveContact('')

  return {
    operations: {
      handleContactPress,
      handleContainerPress,
      handleSearchTextChange,
    },
    models: {
      activeContact,
      searchText,
      contacts: _CONTACTS_MOCK_.filter(filterContacts(searchText)),
    },
  }
}

export default useContacts
