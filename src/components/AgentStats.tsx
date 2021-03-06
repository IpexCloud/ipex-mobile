import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements'

import { AgentServiceData } from '../services'
import colors from '../constants/colors'
import layout from '../constants/layout'
import { Text } from './common'
import { formatSeconds, formatDate } from '../lib/utils'

const AgentStatsRow = ({ label, value }: { label: string; value: number | string }) => (
  <>
    <View style={styles.statsRow}>
      <Text size="xsmall" weight="light" style={{ color: colors.gray600 }}>
        {label}
      </Text>
      <Text size="xsmall" weight="regular">
        {value}
      </Text>
    </View>
    <Divider style={styles.divider} />
  </>
)

type Props = {
  agent: AgentServiceData
}

const AgentStats = (props: Props) => {
  const { agent } = props

  if (!agent) {
    return null
  }

  const agentStats = [
    { label: 'Vyřízených hovorů', value: agent.callsTaken },
    { label: 'Odchozí zodpovězené', value: agent.outgoingCallsAnswered },
    { label: 'Odchozí nezodpovězené', value: agent.outgoingCallsUnanswered },
    { label: 'Zpětných volání', value: agent.cbCalls },
    { label: 'Hovorový čas', value: formatSeconds(agent.talkTime * 1000, 'HH:mm:ss') },
    { label: 'Čas přihlášení', value: formatDate(agent.logonTime) },
    { label: 'Zmeškané vyzvánění', value: agent.ringNoAnswer },
    { label: 'Pracovní pauzy', value: formatSeconds(agent.billPauseTime * 1000, 'HH:mm:ss') },
    { label: 'Nepracovní pauzy', value: formatSeconds(agent.nonBillPauseTime * 1000, 'HH:mm:ss') },
  ]

  return (
    <View style={styles.container}>
      {agentStats.map(({ label, value }) => (
        <AgentStatsRow label={label} value={value} key={label} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: layout.font.xsmall,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: layout.font.xsmall,
  },
  divider: {
    backgroundColor: colors.gray200,
    height: 1,
  },
})

export default AgentStats
