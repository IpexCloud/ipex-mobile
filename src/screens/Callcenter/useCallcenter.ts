import { useState, useEffect } from 'react'

import {
  usePausesService,
  PausesServiceData,
  useAgentService,
  AgentServiceData,
} from '../../services'

import { Architecture } from '../../lib/types'

type CallcenterOperations = {
  handlePauseChange: (pause: string) => void
  handleRefresh: () => Promise<void>
}

type CallcenterModels = {
  pauses: Architecture.ServiceState & { data: PausesServiceData }
  agent: Architecture.ServiceState & { data: AgentServiceData }
  refreshing: boolean
}

const useCallcenter: Architecture.ConcernSeparationHook<
  CallcenterOperations,
  CallcenterModels
> = () => {
  const [{ queries: pauseQueries, commands: pauseCommands }, pauseState] = usePausesService()
  const [{ queries: agentQueries }, agentState] = useAgentService()
  const [agentDetail, setAgentDetail] = useState<AgentServiceData>(undefined)
  const [pauses, setPauses] = useState<PausesServiceData>([])
  const [refreshing, setRefreshing] = useState(false)

  const handlePauseChange = async (pause: string) => {
    if (agentDetail) {
      setAgentDetail({
        ...agentDetail,
        paused: pause !== 'no-pause',
        pausedReason: pause === 'no-pause' ? '' : pause,
      })
      await pauseCommands.change(pause)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    const agent = await agentQueries.getDetail()
    const pausesList = await pauseQueries.getList()
    setAgentDetail(agent)
    setPauses(pausesList)
    setRefreshing(false)
  }

  useEffect(() => {
    agentQueries.getDetail().then((agent) => setAgentDetail(agent))
    pauseQueries.getList().then((pausesList) => setPauses(pausesList))
  }, [])

  return {
    operations: {
      handlePauseChange,
      handleRefresh,
    },
    models: {
      pauses: {
        data: pauses,
        error: pauseState.error,
        loading: pauseState.loading,
      },
      agent: {
        data: agentDetail,
        error: agentState.error,
        loading: agentState.loading,
      },
      refreshing,
    },
  }
}

export default useCallcenter
