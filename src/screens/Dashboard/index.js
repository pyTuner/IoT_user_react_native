import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DashboardCard from '../../components/DashbaordCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({ ...props }) => {

  useEffect(() => {
    // console.log('Props>>>: ', props);
    
  }, []);

  
  return (
    <View style={{ alignItems: 'center' }}>
      <DashboardCard />
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