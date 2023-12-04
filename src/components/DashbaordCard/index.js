import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles'
import { scale } from 'react-native-size-matters';





const DashboardCard = ({card}) => {
  // console.warn('card: ', card);


  return (
    <View style={styles().card}>
      <View style={styles().containerIcon}>
        <Text>Icon</Text>
      </View>
      <View style={styles().containerMain}>
        <View style={styles().subContainerA}>
          <View style={styles().subContainerA_DeviceName}>
            <Text style={{ fontWeight: 800, color: '#000', fontSize: scale(13) }}>{card.Devices.DeviceTypeName}</Text>
          </View>
          <View style={styles().subContainerA_DeviceCount}>
            <Text style={{ fontSize: scale(20) }}>{card.active + card.inActive}</Text>
          </View>
        </View>
        <View style={styles().subContainerB}>
          <View style={styles().subContainerB_Active}>
            <Text style={{ color: 'green', textAlign: 'left' }}>Active</Text>
            <Text style={styles().textActiveCount}>{card.active}</Text>
          </View>
          <View style={styles().subContainerB_Active}>
            <Text style={{ color: 'red', textAlign: 'left' }}>Inactive</Text>
            <Text style={styles().textActiveCount}>{card.inActive}</Text>
          </View>
        </View>

      </View>
    </View>
  )
}

export default DashboardCard