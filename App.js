import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/Screens/Navigation/RootNavigator'

const App = (props) => {
  return (
    <NavigationContainer>
      <RootNavigator/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})