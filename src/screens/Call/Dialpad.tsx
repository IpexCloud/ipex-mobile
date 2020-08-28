import React from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements'
import { RouteProp } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'
import colors from '../../constants/colors'
import layout from '../../constants/layout'
import { ContactsNavigatorParamList } from '../../navigation/tabs/TabsNavigator'
import useDialpad from './useDialpad'

type Props = {
  route: RouteProp<ContactsNavigatorParamList, 'Dialpad'>
}

const Dialpad = (props: Props) => {
  const { operations, models } = useDialpad()

  const input = React.createRef<Input>()

  useFocusEffect(
    React.useCallback(() => {
      operations.handleNumberChange(props.route?.params?.number || '')
      if (input && input.current) {
        input.current.focus()
      }

      return () => {
        operations.handleNumberChange('')
      }
    }, [props.route.params])
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.screen}>
        <Input
          ref={input}
          value={models.number}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="phone-pad"
          inputStyle={styles.dialpadInputStyle}
          containerStyle={{ marginVertical: layout.font.medium }}
          onChangeText={(number: string) => operations.handleNumberChange(number)}
          clearButtonMode="always"
        />
        <View style={styles.buttonsContainer}>
      <Button
          buttonStyle={styles.actionButton}
          icon={<Icon name="call" size={15} color="white" style={styles.actionButtonIcon} />}
          title="Zavolat"
          onPress={() => operations.handleCallNow(models.number)}
        />
        <Button
          buttonStyle={styles.actionButton}
          title="Zavolat přes PBX"
          icon={<Icon name="call" size={15} color="white" style={styles.actionButtonIcon} />}
          onPress={() => operations.handleCallPbx(models.number)}
          loading={models.loading}
         />
      </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    paddingTop: layout.font.xlarge * 2,
  },
  dialpadInputStyle: {
    textAlign: 'center',
    fontSize: layout.font.xlarge,
  },
  actionButton: {
    paddingHorizontal: 14,
    margin: 10,
    width: layout.window.width * 0.45,
  },
  actionButtonIcon: {
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: layout.font.medium,
  },
})

export default Dialpad
