import { useFetch } from 'use-http'
import { Architecture } from '../lib/types'
import { useGlobalContext } from '../context'

export type CallCommands = {
  callPbx: (number: string) => Promise<void>
}

const useCallService: Architecture.ServiceHook<{}, CallCommands> = () => {
  const { auth } = useGlobalContext()
  const { post, loading, error } = useFetch('/calls', (globalOptions) => {
    return { ...globalOptions, loading: false }
  })

  const callPbx = async (number: string) => {
    await post({
      to: number,
      fromUser: {
        identityType: 'login',
        identityValue: auth.email,
      },
    })
  }

  return [
    {
      queries: {},
      commands: {
        callPbx,
      },
    },
    { error, loading },
  ]
}

export { useCallService }
