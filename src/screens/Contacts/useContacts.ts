import { useState, useEffect } from 'react'
import { Linking } from 'react-native'
import { remove as removeDiacritics } from 'diacritics'

import { useContactsService, ContactsServiceData } from '../../services'

import { Architecture } from '../../lib/types'

type ContactsOperations = {
  handleContactPress: (id: string) => void
  handleContainerPress: () => void
  handleSearchTextChange: (text: string) => void
  handleCallNow: (number: string) => Promise<any>
  handleCallPbx: (number: string) => Promise<void>
}

type ContactsModels = {
  activeContact: string
  searchText: string
  contacts: Architecture.ServiceState & { data: ContactsServiceData }
}

const normalize = (text: string) => removeDiacritics(text.toLowerCase())

const filterContacts = (searchText: string) => (contact: any) => {
  if (searchText === '') {
    return true
  }
  const searchParts = searchText.split(' ')
  return searchParts.some((part) => normalize(contact.name).includes(normalize(part)))
}

const useContacts: Architecture.ConcernSeparationHook<ContactsOperations, ContactsModels> = () => {
  const [activeContact, setActiveContact] = useState('')
  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState<ContactsServiceData>([])

  const [{ queries, commands }, { error, loading }] = useContactsService()

  useEffect(() => {
    queries.getContacts().then((contacts) => setData(contacts))
  }, [queries])

  const handleSearchTextChange = (text: string) => {
    setActiveContact('')
    setSearchText(text)
  }
  const handleContactPress = (id: string) => setActiveContact(id)
  const handleContainerPress = () => setActiveContact('')
  const handleCallNow = (number: string) => Linking.openURL(`tel:${number}`)
  const handleCallPbx = (number: string) => commands.callPbx(number).then(() => console.log('DONE'))

  return {
    operations: {
      handleContactPress,
      handleContainerPress,
      handleSearchTextChange,
      handleCallNow,
      handleCallPbx,
    },
    models: {
      activeContact,
      searchText,
      contacts: {
        data: data.filter(filterContacts(searchText)),
        error,
        loading,
      },
    },
  }
}

export default useContacts
