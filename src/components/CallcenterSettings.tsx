import * as React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Platform } from 'react-native'
import { Button, Overlay } from 'react-native-elements'
import { PausesServiceData, AgentServiceData } from '../services'
import Picker from './common/Picker'
import colors from '../constants/colors'
import layout from '../constants/layout'
import { Loader } from './common'

type Props = {
  pauseOptions: PausesServiceData
  agent: AgentServiceData
  onPauseChange: (pause: string) => void
}

const CallcenterSettings = (props: Props) => {
  const [visible, setVisible] = React.useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  const pauseOptions = props.pauseOptions
    .map((p) => ({ label: p, value: p }))
    .concat({ label: 'Bez pauzy', value: 'no-pause' })

  if (!props.agent) return <Loader />

  return (
    <View style={styles.container}>
      <View style={styles.settings}>
        <Button
          TouchableComponent={TouchableWithoutFeedback}
          buttonStyle={styles.button}
          icon={{
            name: 'dot-single',
            size: 45,
            color: props.agent.paused ? colors.error : colors.primary,
            type: 'entypo',
            containerStyle: styles.buttonIcon,
          }}
          title={props.agent.paused ? props.agent.pausedReason : 'Bez pauzy'}
          onPress={toggleOverlay}
          type="clear"
          titleStyle={styles.buttonTitle}
        />
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
        <>
          <Picker
            value={props.agent.paused ? props.agent.pausedReason : 'no-pause'}
            options={pauseOptions}
            onSelect={(value) => props.onPauseChange(value)}
          />
        </>
      </Overlay>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  settings: {
    width: '95%',
  },
  button: {
    borderRadius: 5,
    height: '95%',
    borderWidth: 0.5,
    borderColor: colors.gray300,
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
    padding: 20,
  },
})

export default CallcenterSettings
