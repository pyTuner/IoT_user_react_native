import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const Dashboard = ({ ...props }) => {

  useEffect(() => {
    console.log('Props>>>: ', props);
  }, []);
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
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
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)