import * as React from 'react'
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native'

import { ScreenTitle } from '../../components/common'
import { CallcenterSettings } from '../../components'
import colors from '../../constants/colors'
import useCallcenter from './useCallcenter'

const Callcenter = () => {
  const { operations, models } = useCallcenter()

  if (models.agent.error) {
    Alert.alert('Nastala chyba', 'Chyba pri načítání stavu agenta', [{ text: 'OK' }])
  }

  if (models.pauses.error) {
    Alert.alert('Nastala chyba', 'Chyba pri načítání pauz', [{ text: 'OK' }])
  }

  return (
    <View style={styles.screen}>
      <ScreenTitle text="Call centrum" />
      {models.pauses.loading || models.agent.loading || !models.agent.data ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
          <CallcenterSettings
            pauseOptions={models.pauses.data}
            agent={models.agent.data}
            onPauseChange={operations.handlePauseChange}
          />
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
})

export default Callcenter
