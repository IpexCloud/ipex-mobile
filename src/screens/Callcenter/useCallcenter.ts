import { useState, useEffect } from 'react'

import {
  usePausesService,
  PausesServiceData,
  useAgentService,
  AgentServiceData,
} from '../../services'

import { Architecture } from '../../lib/types'

type PausesOperations = {
  handlePauseChange: (pause: string) => void
}

type PausesModels = {
  pauses: Architecture.ServiceState & { data: PausesServiceData }
  agent: Architecture.ServiceState & { data: AgentServiceData }
}

const useCallcenter: Architecture.ConcernSeparationHook<PausesOperations, PausesModels> = () => {
  const [{ queries: pauseQueries, commands: pauseCommands }, pauseState] = usePausesService()
  const [{ queries: agentQueries }, agentState] = useAgentService()
  const [agentDetail, setAgentDetail] = useState<AgentServiceData>(undefined)
  const [pauses, setPauses] = useState<PausesServiceData>([])

  const handlePauseChange = async (pause: string) => {
    setAgentDetail({
      paused: pause !== 'no-pause',
      pausedReason: pause === 'no-pause' ? '' : pause,
    })
    await pauseCommands.change(pause)
  }

  useEffect(() => {
    agentQueries.getDetail().then((agent) => setAgentDetail(agent))
    pauseQueries.getList().then((pausesList) => setPauses(pausesList))
  }, [])

  return {
    operations: {
      handlePauseChange,
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
    },
  }
}

export default useCallcenter
