import { useEffect, useState } from 'react'

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

const useContactsService: Architecture.ServiceHook<ContactsServiceData> = () => {
  const [state, setState] = useState<{ loading: boolean; error: any; data: any }>({
    data: [],
    error: null,
    loading: true,
  })

  useEffect(() => {
    setTimeout(
      () =>
        setState({
          data: _CONTACTS_MOCK_,
          error: null,
          loading: false,
        }),
      2000
    )
  }, [])

  return state
}

export { useContactsService }
