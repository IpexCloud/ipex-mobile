import { useState, useEffect } from 'react'
import { remove as removeDiacritics } from 'diacritics'

import { useContactsService, ContactsServiceData } from '../../services'

import { Architecture } from '../../lib/types'

type ContactsOperations = {
  handleContactPress: (id: string) => void
  handleContainerPress: () => void
  handleSearchTextChange: (text: string) => void
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

  const [{ queries }, { error, loading }] = useContactsService()

  useEffect(() => {
    queries.getContacts().then((contacts) => setData(contacts))
  }, [])

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
      contacts: {
        data: data.filter(filterContacts(searchText)),
        error,
        loading,
      },
    },
  }
}

export default useContacts
