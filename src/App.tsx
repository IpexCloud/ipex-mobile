import 'react-native-gesture-handler'
import * as React from 'react'

import AppNavigator from './navigation'
import { GlobalContextProvider } from './context'

const App = () => {
  return (
    <GlobalContextProvider>
      <AppNavigator />
    </GlobalContextProvider>
  )
}

export default App