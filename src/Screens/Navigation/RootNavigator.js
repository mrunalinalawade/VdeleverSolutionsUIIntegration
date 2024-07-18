import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../Homescreen';
import BottomTabbar from './BottomTabbar';
import HomeScreenmain from '../HomeScreenmain';




const Stack = createNativeStackNavigator();
const RootNavigator = (props) => {
  return (
    <Stack.Navigator initialRouteName="BottomTabbar"  screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Homescreen" component={Homescreen} />
      <Stack.Screen name="HomeScreenmain" component={HomeScreenmain} />
        <Stack.Screen name="BottomTabbar" component={BottomTabbar} />
     
       
      </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})