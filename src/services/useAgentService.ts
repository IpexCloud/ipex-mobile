import { useFetch } from 'use-http'

import { Architecture } from '../lib/types'

export type AgentServiceData =
  | {
      paused: boolean
      pausedReason: string
    }
  | undefined

export type AgentQueries = {
  getDetail: () => Promise<AgentServiceData>
}

const useAgentService: Architecture.ServiceHook<AgentQueries, {}> = () => {
  const { loading, error, query, response } = useFetch('https://ipbxapi-devel.voipex.io/graphql', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI0MDM3ZWMxNTkwMjBiZGMxOWM5YiIsImlzcyI6Imh0dHBzOi8vYW52aWwtZGV2ZWwudm9pcGV4LmV1Iiwic3ViIjoiNzc3NTFmMzEtNzk4Zi00YWU1LTg1OWItZGQzNjUxNGZkYWE1IiwiYXVkIjoiZTNkMWI1OWItNjQ2Yi00ZjhlLTk5ZGMtMjRmMzZmMjIxZDA0IiwiZXhwIjoxNTk4MzYyODE5LCJpYXQiOjE1OTgzNTkyMTksInNjb3BlIjoib3BlbmlkIHByb2ZpbGUifQ.Rb97RUsXGzgGNGXcwR14ZBxXEKE-vvPXOw9oalIpnLdNr51AiDlBdmKzszH0IC4gj1FXqkntc2JcGSf8gbAjiy806FPvSCmjRTQH_6d-c-afrwQV2LVRsrk6Ratsk_QqU1x1Qnq3lmVQXtQLiryCf0cIzoxqlPdn2L1glL4qXRGi0CsP-eMjMmkHFrTGYx6tXmfhDFQjoq2QqN8m4Wf4o6rRzPp3ijnukIOjKszwzY9nkkK3FRVyf_V2-BmmARH_G1epu1Bf5hV5SjfEPlOm_H6Igwx2_o2e4sdZ8PbrpT4rnZc40Jp9UM57-lz1OnOnpBEVgj3WsOUw1yVk09tT0QrT0_LC8ZPzO__JhEBSy8NqllYrsnNq0pPKXlw_xkQIQi6VAC27MFVoEAJ4Ju7U1m-JDGG0MckyYcGJTTFegO_yPrME7IahnY9O6TQYkqAMmhmyAolVhneX_HLcyHFy0Vd4h5Q-Bk8tkACzg6Sq4XxR7wZf55NCY6DK7aFyYkgZcZ2RPJJ1OsdVbr3u2d25VDAMHMgO1SHj6j2S42revVZhl2_tU-KDoZ6ShU4dOERn9zIH5ccj0V-0uVm1CXlvSnFx6eU79LiTBJYoLn0CsTpyvh796uCJmu2YXsXG4gYes8woyq8ygCDc4hMcXLbD_9630iKBDsHQxbxrtL1KkZE`,
    },
    loading: true,
  })

  const getDetail = async () => {
    const agentDetail = await query(
      `
        query Agent {
            agents(userId: "77751f31-798f-4ae5-859b-dd36514fdaa5") {
                paused
                pausedReason
            }
        }
      `
    )
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
