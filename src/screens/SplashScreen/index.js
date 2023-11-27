import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { styles } from './styles';


const SplashScreen = () => {
  const [isVisible, setVisibile] = useState(true);
  const navigation = useNavigation();

  const theme = useTheme();
  const { background, dark } = theme;

  const hideSplashScreen = () => {
    setVisibile(false);
  }

  useEffect(() => {
    setTimeout(() => {
      hideSplashScreen();
      navigation.navigate('LogIn');
    }, 1000);
  }, [])

  const renderSplash = () => {
    return (
      <View style={styles().SplashScreen_RootView}>
        <View style={styles().SplashScreen_ChildView}>
          <Image
            source={dark? require('../../assets/Elliot_Logo_light.png') : require('../../assets/Elliot_Logo_Dark.png')}
            style={{ width: 150, height: 150, resizeMode: 'contain' }}
          />
        </View>
      </View>
    )
  }
  return (
    <View style={styles(background).MainContainer}>
      {isVisible === true ? renderSplash() : null}
    </View>
  )
}

export default SplashScreen