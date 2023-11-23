import { View, Text } from 'react-native'
import React from 'react'
import AuthNavigator from './AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import constants from '../constants'

const {MyDarkTheme, MyLightTheme} = constants;

const RootNavigation = () => {
  return (
    <NavigationContainer theme={MyDarkTheme}>
        <AuthNavigator />
    </NavigationContainer>
  )
}

export default RootNavigation;