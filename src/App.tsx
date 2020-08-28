import 'react-native-gesture-handler'
import * as React from 'react'
import { ThemeProvider } from 'react-native-elements'

import AppNavigator from './navigation'
import { GlobalContextProvider } from './context'
import theme from './constants/themes'

const App = () => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </GlobalContextProvider>
  )
}

export default App
