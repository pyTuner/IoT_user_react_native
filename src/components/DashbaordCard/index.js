import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles'
import { scale } from 'react-native-size-matters';
import { doGetParam } from '../../api/services/APIServices';
import { API_SIGNATURE } from '../../api/constants/APIConstants';


const getStatus = async() => {
  const result =  await doGetParam(API_SIGNATURE.DEVICE_STATUS, `companyId=20` )
  // console.warn('result', result);
}

const DashboardCard = () => {

  useEffect(() => {
    getStatus();
  }, [])
  return (
    <View style={styles().card}>
      <View style={styles().containerIcon}>
        <Text>Icon</Text>
      </View>
      <View style={styles().containerMain}>
        <View style={styles().subContainerA}>
          <View style={styles().subContainerA_DeviceName}>
            <Text style={{ fontWeight: 800, color: '#000', fontSize: scale(13) }}>Device Name</Text>
          </View>
          <View style={styles().subContainerA_DeviceCount}>
            <Text style={{ fontSize: scale(20) }}>7</Text>
          </View>
        </View>
        <View style={styles().subContainerB}>
          <View style={styles().subContainerB_Active}>
            <Text style={{ color: 'green', textAlign: 'left' }}>Active</Text>
            <Text style={styles().textActiveCount}>4</Text>
          </View>
          <View style={styles().subContainerB_Active}>
            <Text style={{ color: 'red', textAlign: 'left' }}>Inactive</Text>
            <Text style={styles().textActiveCount}>3</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default DashboardCard