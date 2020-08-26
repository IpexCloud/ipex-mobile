import { useFetch } from 'use-http'

import { Architecture } from '../lib/types'
import { useGlobalContext } from '../context'

const _CONTACTS_MOCK_ = [
  {
    id: 1,
    name: 'Jakub Konečný',
    number: '+421768765453',
  },
  {
    id: 2,
    name: 'Sebo Mach',
    number: '775898862',
  },
  {
    id: 3,
    name: 'Vladimír Čepo',
    number: '+421748765453',
  },
  {
    id: 4,
    name: 'Vlasta Novák',
    number: '+421738765453',
  },
]

export type ContactsServiceData = any[]

export type ContactsQueries = {
  getContacts: () => Promise<ContactsServiceData>
}

export type ContactsCommands = {
  callPbx: (number: string) => Promise<void>
}

const useContactsService: Architecture.ServiceHook<ContactsQueries, ContactsCommands> = () => {
  const { post, loading, error } = useFetch('/calls')
  const { auth } = useGlobalContext()

  const callPbx = async (number: string) => {
    await post({
      to: number,
      fromUser: {
        identityType: 'login',
        identityValue: auth.email,
      },
    })
  }

  const getContacts = (): Promise<ContactsServiceData> =>
    new Promise((resolve) => setTimeout(() => resolve(_CONTACTS_MOCK_), 2000))

  return [
    {
      queries: {
        getContacts,
      },
      commands: {
        callPbx,
      },
    },
    { error, loading },
  ]
}

export { useContactsService }
