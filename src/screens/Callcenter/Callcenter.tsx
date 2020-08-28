import * as React from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'

import { ScreenTitle, Loader, Appbar } from '../../components/common'
import { CallcenterSettings } from '../../components'
import colors from '../../constants/colors'
import useCallcenter from './useCallcenter'

import { TabsNavigatorParamList } from '../../navigation/tabs/TabsNavigator'
import { DrawerParamList } from '../../navigation/drawer/DrawerNavigator'

type Props = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<TabsNavigatorParamList, 'Callcenter'>,
    DrawerNavigationProp<DrawerParamList>
  >
}

const Callcenter = (props: Props) => {
  const { operations, models } = useCallcenter()

  if (models.agent.error) {
    Alert.alert('Nastala chyba', 'Chyba pri načítání stavu agenta', [{ text: 'OK' }])
  }

  if (models.pauses.error) {
    Alert.alert('Nastala chyba', 'Chyba pri načítání pauz', [{ text: 'OK' }])
  }

  return (
    <>
      <Appbar {...props} />
      <View style={styles.screen}>
        <ScreenTitle text="Call centrum" />
        {models.pauses.loading || models.agent.loading ? (
          <Loader />
        ) : (
          <CallcenterSettings
            pauseOptions={models.pauses.data}
            agent={models.agent.data}
            onPauseChange={operations.handlePauseChange}
          />
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
})

export default Callcenter
