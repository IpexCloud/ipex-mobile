import 'react-native-gesture-handler'
import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Navigatation from './navigation'

export default function App() {
  return (
    <NavigationContainer>
      <Navigatation />
    </NavigationContainer>
  )
}
