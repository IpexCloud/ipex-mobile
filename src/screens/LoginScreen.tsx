import * as React from 'react'
import { StyleSheet, View, UIManager, KeyboardAvoidingView, Text } from 'react-native'
import { Input, Button, Icon, Image } from 'react-native-elements'

import { useFetch } from 'use-http'
import colors from '../constants/colors'
import layout from '../constants/layout'

// Enable LayoutAnimation on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

export default function LoginScreen(props) {
  const [{ email, password }, setAuth] = React.useState({ email: '', password: '' })
  const { post, loading, response, error } = useFetch('https://restapi-devel.ipex.cz/v1/sso/login')

  const handleLogin = async () => {
    const data = await post({ email, password })
    if (response.ok) {
      console.log('Res', data)
    }
  }
  return (
    <View style={styles.screen}>
      {error && <Text>Errorik nastal</Text>}
      {loading && <Text>Loading...</Text>}
      <View>
        <KeyboardAvoidingView contentContainerStyle={styles.loginContainer} behavior="position">
          <View style={styles.logoContainer}>
            <Image
              style={{ width: layout.window.width * 0.4, height: layout.window.width * 0.2 }}
              source={{
                uri:
                  'https://partneri.shoptet.cz/wp-content/uploads/2019/10/ipex-2019-rgb_ipex-color_400x400px.jpg',
              }}
            />
          </View>

          <View style={styles.formContainer}>
            <Input
              leftIcon={
                <Icon name="mail-outline" type="ionicons" color={colors.secondaryText} size={25} />
              }
              value={email}
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
              onChangeText={(text) => setAuth({ password, email: text })}
            />
            <Input
              leftIcon={
                <Icon name="lock-open" type="material" color={colors.secondaryText} size={25} />
              }
              value={password}
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
              placeholder={'Password'}
              onSubmitEditing={handleLogin}
              onChangeText={(text) => setAuth({ password: text, email })}
            />

            <Button
              buttonStyle={styles.button}
              containerStyle={styles.buttonContainer}
              title="Login"
              onPress={handleLogin}
              titleStyle={styles.buttonTitleStyle}
              loading={loading}
              disabled={loading}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoContainer: {
    height: 150,
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
    backgroundColor: colors.primary,
    textAlign: 'center',
  },
  buttonTitleStyle: {
    fontSize: 16,
    color: colors.background,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  formContainer: {
    backgroundColor: colors.background,
    borderRadius: 10,
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center',
    width: '90%',
  },
})
