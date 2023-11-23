import { View, Text } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import LogIn from '../screens/Login';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../screens/Onboarding';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';



const AuthNavigator = ({ ...props }) => {

  console.log(`Onboarding status: ${props.isOnboardingDisabled}`);
  const { isOnboardingDisabled } = props;
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={isOnboardingDisabled ? 'Splash' : 'OnBoarding'}
    >
      <Stack.Screen name='Splash' component={SplashScreen} />
      <Stack.Screen name='Tab' component={TabsNavigator} />
      <Stack.Screen name='LogIn' component={LogIn} />
      <Stack.Screen name='OnBoarding' component={Onboarding} />
    </Stack.Navigator>
  )
}

AuthNavigator.propTypes = {
  isOnboardingDisabled: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    isOnboardingDisabled: state.auth.isOnboardingDisabled
  }
}

export default connect(mapStateToProps)(AuthNavigator);