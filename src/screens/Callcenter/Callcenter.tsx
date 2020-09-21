import React from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CompositeNavigationProp } from '@react-navigation/native'

import { ScreenTitle, Loader, Appbar, Error } from '../../components/common'
import { CallcenterSettings, AgentStats } from '../../components'
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

  if (models.agent.error || models.pauses.error) {
    return <Error reason="Nastala chyba pri načítání callcentra" />
  }

  return (
    <>
      <Appbar {...props} />
      <ScrollView
        contentContainerStyle={styles.screen}
        refreshControl={
          <RefreshControl refreshing={models.refreshing} onRefresh={operations.handleRefresh} />
        }
      >
        <ScreenTitle text="Call centrum" />
        {models.pauses.loading || models.agent.loading ? (
          <Loader />
        ) : (
          <>
            <CallcenterSettings
              pauseOptions={models.pauses.data}
              agent={models.agent.data}
              onPauseChange={operations.handlePauseChange}
            />
            <AgentStats agent={models.agent.data} />
          </>
        )}
      </ScrollView>
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
