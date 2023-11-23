import { View, Text, Button } from 'react-native'
import React from 'react'

export default LogIn = ({ navigation, route }) => {
    const { handleLogin } = route.params || {};

  const handleLoginPress = () => {
    handleLogin && handleLogin();
  };
  return (
    <View>
      <Text style={{fontSize:40, fontWeight:900, color:"red"}}>LogIn</Text>
      <Button title="Login" onPress={handleLoginPress} />
    </View>
  )
}

