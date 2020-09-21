import { useFetch } from 'use-http'

import { Architecture } from '../lib/types'
import { useGlobalContext } from '../context'

export type AgentServiceData =
  | {
      callsTaken: number
      outgoingCallsAnswered: number
      outgoingCallsUnanswered: number
      cbCalls: number
      talkTime: number
      logonTime: string
      ringNoAnswer: number
      billPauseTime: number
      nonBillPauseTime: number
      paused: boolean
      pausedReason: string
    }
  | undefined

export type AgentQueries = {
  getDetail: () => Promise<AgentServiceData>
}

const useAgentService: Architecture.ServiceHook<AgentQueries, {}> = () => {
  const { loading, error, query, response } = useFetch('/graphql')
  const { auth } = useGlobalContext()

  const getDetail = async () => {
    const agentDetail = await query(`
        query Agent {
          agents(userId: "${auth.userId}") {
            callsTaken
            outgoingCallsAnswered
            outgoingCallsUnanswered
            cbCalls
            talkTime
            logonTime
            ringNoAnswer
            billPauseTime
            nonBillPauseTime
            paused
            pausedReason
          }
        }
      `)
    if (response.ok) {
      return agentDetail.data.agents[0]
    }
  }

  return [
    {
      commands: {},
      queries: {
        getDetail,
      },
    },
    { error, loading },
  ]
}

export { useAgentService }
