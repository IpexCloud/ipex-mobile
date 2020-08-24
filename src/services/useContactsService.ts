import { Architecture } from '../lib/types'

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

export type ContactsServiceData = any[]

export type ContactsQueries = {
  getContacts: () => Promise<ContactsServiceData>
}

const useContactsService: Architecture.ServiceHook<ContactsQueries, {}> = () => {
  const getContacts = (): Promise<ContactsServiceData> =>
    new Promise((resolve) => setTimeout(() => resolve(_CONTACTS_MOCK_), 2000))

  return [
    {
      queries: {
        getContacts,
      },
      commands: {},
    },
    { error: null, loading: false },
  ]
}

export { useContactsService }
