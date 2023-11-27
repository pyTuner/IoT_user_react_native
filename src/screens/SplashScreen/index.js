import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useTheme } from '@react-navigation/native';
import { styles } from './styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const SplashScreen = ({...props}) => {

  const { isLoggedIn, accessToken } = props;
  const [isVisible, setVisibile] = useState(true);
  const navigation = useNavigation();

  const theme = useTheme();
  const { background, dark } = theme;

  const hideSplashScreen = () => {
    setVisibile(false);
  }

  useEffect(() => {
    console.log('accessToken in splash:  ', accessToken);
    setTimeout(() => {
      hideSplashScreen();
      navigation.navigate(isLoggedIn ? 'Home' : 'LogIn');
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

SplashScreen.propTypes = {
  user: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    isLoggedIn: state.auth.isLoggedIn,
    accessToken: state.auth.accessToken,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (SplashScreen);