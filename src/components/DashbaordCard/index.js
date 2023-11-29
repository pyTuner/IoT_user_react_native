import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles'
import { scale } from 'react-native-size-matters';

const DashboardCard = () => {
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
            <Text style={{ color: 'green', textAlign: 'start' }}>Active</Text>
            <Text style={styles().textActiveCount}>4</Text>
          </View>
          <View style={styles().subContainerB_Active}>
            <Text style={{ color: 'red', textAlign: 'start' }}>Inactive</Text>
            <Text style={styles().textActiveCount}>3</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default DashboardCard