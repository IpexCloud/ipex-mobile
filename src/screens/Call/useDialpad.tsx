import { useState } from 'react'
import { Linking } from 'react-native'
import { useCallService } from '../../services'

import { Architecture } from '../../lib/types'

type DialpadOperations = {
  handleNumberChange: (number: string) => void
  handleCallNow: (number: string) => Promise<any>
  handleCallPbx: (number: string) => Promise<void>
}

type DialpadModels = Architecture.ServiceState & {
  number: string
}

const useContacts: Architecture.ConcernSeparationHook<DialpadOperations, DialpadModels> = () => {
  const [dialpadNumber, setDialpadNumber] = useState('')

  const [{ commands }, { error, loading }] = useCallService()

  const handleNumberChange = (number: string) => {
    setDialpadNumber(number)
  }

  const handleCallNow = (number: string) => Linking.openURL(`tel:${number}`)
  const handleCallPbx = async (number: string) => {
    await commands.callPbx(number)
    setDialpadNumber('')
  }

  return {
    operations: {
      handleNumberChange,
      handleCallNow,
      handleCallPbx,
    },
    models: {
      number: dialpadNumber,
      error,
      loading,
    },
  }
}

export default useContacts
