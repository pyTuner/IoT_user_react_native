import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import DashboardCard from '../../components/DashbaordCard';
import { doGetParam } from '../../api/services/APIServices';
import { API_SIGNATURE } from '../../api/constants/APIConstants';
import { styles } from './styles';


const Dashboard = ({}) => {
  const [result, setResult] = useState([]);
  const companyId = useSelector((store) => store.auth.user.companyId);

  console.warn(`companyId: ${companyId}`);
  // device status
  useEffect(() => {
    // console.warn('Props>>>: ', props);
    const getStatus = async () => {
      data = await doGetParam(API_SIGNATURE.DEVICE_STATUS, { companyId: companyId });
      setResult(data.data)

    }
    getStatus();

  }, []);

  console.log('result:', result);
  return (

    <View style={styles.main}>
      {result ? (
        result?.map((card, index) => (
          <DashboardCard key={index} card={card} />
        )
        )

      ) : <Text style={{ backgroundColor: 'red' }}>Arios</Text>}
    </View>

  )
}


export default Dashboard;