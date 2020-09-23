import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native'
import { Button, Overlay } from 'react-native-elements'

import { PausesServiceData, AgentServiceData } from '../services'
import { Picker } from './common'
import colors from '../constants/colors'
import layout from '../constants/layout'

type Props = {
  pauseOptions: PausesServiceData
  agent: AgentServiceData
  onPauseChange: (pause: string) => void
}

const CallcenterSettings = (props: Props) => {
  const { agent, pauseOptions } = props
  const [visible, setVisible] = React.useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  const pauseOptionsMap = pauseOptions
    .map((p) => ({ label: p, value: p }))
    .concat({ label: 'Bez pauzy', value: 'no-pause' })

  if (!agent) {
    return null
  }

  return (
    <>
      <Button
        TouchableComponent={TouchableWithoutFeedback}
        buttonStyle={styles.button}
        icon={{
          name: 'dot-single',
          size: 45,
          color: agent.paused ? colors.error : colors.primary,
          type: 'entypo',
          containerStyle: styles.buttonIcon,
        }}
        title={agent.paused ? agent.pausedReason : 'Bez pauzy'}
        onPress={toggleOverlay}
        type="clear"
        titleStyle={styles.buttonTitle}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
        <Picker
          value={agent.paused ? agent.pausedReason : 'no-pause'}
          options={pauseOptionsMap}
          onSelect={(value) => props.onPauseChange(value)}
        />
      </Overlay>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: colors.gray300,
    padding: layout.font.xsmall,
    ...Platform.select({
      ios: {
        shadowColor: colors.gray600,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
      },
    }),
  },
  buttonTitle: {
    textAlign: 'center',
    color: colors.gray600,
  },
  buttonIcon: {
    position: 'absolute',
    left: '20%',
  },
  overlay: {
    width: layout.window.width * 0.9,
    height: layout.window.height * 0.4,
    padding: layout.font.xsmall,
  },
})

export default CallcenterSettings
