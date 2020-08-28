import * as React from 'react'
import { StyleSheet, View, UIManager, KeyboardAvoidingView } from 'react-native'
import { Input, Button, Image } from 'react-native-elements'

import { Text } from '../../components/common'

import useLogin from './useLogin'

import colors from '../../constants/colors'
import layout from '../../constants/layout'

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoContainer: {
    height: 200,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '90%',
    marginTop: 32,
    flex: 0,
  },
  button: {
    borderRadius: 10,
    height: 50,
    textAlign: 'center',
  },
  buttonTitleStyle: {
    fontSize: layout.font.small,
    color: colors.background,
    textAlign: 'center',
  },

  formContainer: {
    backgroundColor: colors.background,
    borderRadius: 10,
    margin: 30,
    alignItems: 'center',
    width: '90%',
  },
})

const Login = () => {
  const { operations, models } = useLogin()
  return (
    <View style={styles.screen}>
      <View>
        <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior="position">
          <View style={styles.logoContainer}>
            <Image
              style={{ width: layout.window.width / 3, height: layout.window.width / 9 }}
              source={require('../../../assets/ipex_logo.png')}
            />
          </View>
          <View style={styles.formContainer}>
            <Input
              value={models.credentials.email}
              keyboardAppearance="light"
              autoFocus={false}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              inputStyle={{ marginLeft: 10 }}
              placeholder={'Email'}
              containerStyle={{
                borderBottomColor: 'rgba(0, 0, 0, 0.38)',
              }}
              onChangeText={(text: string) => operations.updateCredentials({ email: text })}
            />
            <Input
              value={models.credentials.password}
              keyboardAppearance="light"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              returnKeyType="done"
              blurOnSubmit={true}
              containerStyle={{
                marginTop: 16,
                borderBottomColor: 'rgba(0, 0, 0, 0.38)',
              }}
              inputStyle={{ marginLeft: 10 }}
              placeholder={'Heslo'}
              onSubmitEditing={operations.handleLogin}
              onChangeText={(text: string) => operations.updateCredentials({ password: text })}
            />
            <Button
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              title="Přihlásit"
              onPress={operations.handleLogin}
              titleStyle={styles.buttonTitleStyle}
              loading={models.login.loading}
              disabled={models.login.loading}
            />
            {models.login.error && <Text>Error occured: {models.login.error}</Text>}
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

export default Login
