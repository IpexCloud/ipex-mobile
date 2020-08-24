import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Overlay, Text, Card } from 'react-native-elements'

import Picker from './common/Picker'
import colors from '../constants/colors'
import layout from '../constants/layout'

const pauseOptions = [
  { label: 'No pause', value: 'No pause' },
  { label: 'WC', value: 'WC' },
  { label: 'Lunch', value: 'Lunch' },
  { label: 'Private', value: 'Private' },
  { label: 'Work', value: 'Work' },
]

export default function CallcenterSettings() {
  const [pause, setPause] = React.useState('Bez pauzy')
  const [visible, setVisible] = React.useState(false)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  return (
    <View style={styles.container}>
      <Card title="Settings" containerStyle={styles.card}>
        <Text style={styles.cardText}>
          Change your callcenter settings for example your availability
        </Text>
        <Button
          buttonStyle={styles.button}
          icon={{
            name: 'settings',
            size: 15,
            color: 'white',
            type: 'ionicons',
          }}
          raised
          onPress={toggleOverlay}
        />
      </Card>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay} overlayStyle={styles.overlay}>
        <>
          <Text style={styles.overlayLabel}>Pause settings</Text>
          <Picker
            value={pause}
            options={pauseOptions}
            onChange={(selected) => setPause(selected)}
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
  card: {
    borderRadius: 10,
  },
  cardText: {
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: colors.primary,
  },
  overlay: {
    width: layout.window.width * 0.8,
    height: layout.window.height * 0.4,
    padding: 20,
  },
  overlayLabel: {
    fontWeight: 'bold',
    paddingBottom: 10,
  },
})
