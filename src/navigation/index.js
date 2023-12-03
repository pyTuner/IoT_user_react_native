import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AuthNavigator from './AuthNavigator'
import { NavigationContainer } from '@react-navigation/native'
import Constants from '../constants'
import axios from 'axios'

const { MyDarkTheme, MyLightTheme, BASE_URL } = Constants;

const RootNavigation = () => {
  // whenever AuthNavigation is called, the baseURL is set to axios.default   
  const setUrlConfig = () => {
    // console.log(`called setUrlConfig`, BASE_URL);
    // axios.defaults.baseURL = BASE_URL;      // set default baseURL
  };

  useEffect(() => {
    setUrlConfig();
  }, []);
  return (
    <NavigationContainer theme={MyLightTheme}>
      <AuthNavigator />
    </NavigationContainer>
  )
}

export default RootNavigation;