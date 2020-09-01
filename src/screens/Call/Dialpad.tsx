import React, { createRef, useCallback, useEffect } from 'react'
import { View, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import { Input, Icon, ListItem, Overlay } from 'react-native-elements'
import { RouteProp } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'

import { ContactsNavigatorParamList } from '../../navigation/tabs/TabsNavigator'
import { Text } from '../../components/common'
import colors from '../../constants/colors'
import layout from '../../constants/layout'
import useDialpad from './useDialpad'

type Props = {
  route: RouteProp<ContactsNavigatorParamList, 'Dialpad'>
}

const Dialpad = (props: Props) => {
  const { operations, models } = useDialpad()
  const input = createRef<Input>()

  useFocusEffect(
    useCallback(() => {
      operations.handleNumberChange(props.route?.params?.number || '')
      if (input && input.current && !props.route?.params?.number) {
        input.current.focus()
      }

      return () => {
        operations.handleNumberChange('')
      }
    }, [props.route.params])
  )

  useEffect(() => {
    if (models.error) {
      Alert.alert('Chyba', 'Vytočení hovoru nebylo úspěšné', [{ text: 'OK' }])
      operations.handleToggleModal()
    }
  }, [models.error])

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
        <Icon
          name="call"
          size={layout.window.width / 10}
          onPress={operations.handleToggleModal}
          color={colors.background}
          containerStyle={styles.callIcon}
        />
        <Overlay
          isVisible={models.modalVisible}
          onBackdropPress={operations.handleToggleModal}
          overlayStyle={styles.overlay}
        >
          <>
            <Text style={styles.callNumberLabel} weight="medium">
              {models.number}
            </Text>
            <ListItem
              bottomDivider
              containerStyle={styles.listItem}
              onPress={() => operations.handleCallNow(models.number)}
            >
              <Icon name="phone-iphone" size={layout.font.small} color={colors.gray600} />
              <Text weight="light">Zavolat</Text>
            </ListItem>
            <ListItem
              bottomDivider
              containerStyle={styles.listItem}
              onPress={() => operations.handleCallPbx(models.number)}
              disabled={models.loading}
            >
              <Icon name="call" size={layout.font.small} color={colors.gray600} />
              <Text weight="light">Zavolat přes PBX</Text>
            </ListItem>
          </>
        </Overlay>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: layout.font.xlarge * 2,
  },
  dialpadInputStyle: {
    textAlign: 'center',
    fontSize: layout.font.xlarge,
  },
  callIcon: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    width: layout.window.width * 0.2,
    height: layout.window.width * 0.2,
    borderRadius: layout.window.width * 0.2,
    marginBottom: layout.font.medium,
  },
  callNumberLabel: {
    margin: layout.font.medium,
  },
  overlay: {
    width: layout.window.width * 0.9,
    height: layout.window.height * 0.3,
    position: 'absolute',
    bottom: layout.window.height * 0.05,
    backgroundColor: colors.background,
  },
  listItem: {
    backgroundColor: colors.background,
  },
})

export default Dialpad
