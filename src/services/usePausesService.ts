import { useFetch } from 'use-http'
import { Architecture } from '../lib/types'

export type PausesServiceData = string[]

export type PauseQueries = {
  getList: () => Promise<PausesServiceData>
}

export type PauseCommands = {
  change: (pause: string) => Promise<void>
}

const usePausesService: Architecture.ServiceHook<PauseQueries, PauseCommands> = () => {
  const { loading, error, query, response } = useFetch('/graphql')

  const getList = async () => {
    const pausesList = await query(`{pauses}`)
    if (response.ok) {
      return pausesList.data.pauses
    }
  }

  const change = async (pause: string) => {
    await query(`
      mutation {
        userAction(action: ${pause === 'no-pause' ? 'unpause' : `pause, pause: "${pause}"`})
      }
    `)
  }

  return [
    {
      commands: {
        change,
      },
      queries: {
        getList,
      },
    },
    { error, loading },
  ]
}

export { usePausesService }
