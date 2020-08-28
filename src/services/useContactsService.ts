import { useFetch } from 'use-http'
import { Architecture } from '../lib/types'

export type Contact = {
  id: number
  firstName: string
  lastName: string
  company: string
  email: string
  phoneNumbers: { type: 'ip' | 'pev' | 'mob' | 'fax'; number: string }[]
}

export type ContactsServiceData = Contact[]

export type ContactsQueries = {
  getContacts: () => Promise<ContactsServiceData>
}

const useContactsService: Architecture.ServiceHook<ContactsQueries, {}> = () => {
  const { get, loading, error, response } = useFetch()

  const getContacts = async (): Promise<ContactsServiceData> => {
    const contacts = await get(`/contacts`)
    if (response.ok) {
      return contacts
    } else return []
  }

  return [
    {
      queries: {
        getContacts,
      },
      commands: {},
    },
    { error, loading },
  ]
}

export { useContactsService }
