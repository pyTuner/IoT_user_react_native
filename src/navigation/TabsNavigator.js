import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Dashboard from '../screens/Dashboard'
import RealTime from '../screens/RealTime'
import Historical from '../screens/Historical'
import Alerts from '../screens/Alerts'
import { moderateScale } from 'react-native-size-matters'

const TabsNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions = {{
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor:'#9ea9b3',
                tabBarStyle: {      
                    display: 'flex',          
                    marginVertical: moderateScale(2),
                    height:55                    
                },
                showLabel: true,
            }}
        >
            <Tab.Screen
                name='Dashboard'
                component={ Dashboard }
                options={{
                    tabBarIcon: ({ size, color }) => (
                        < Icon
                            name='home'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />
            <Tab.Screen
                name='RealTime'
                component={ RealTime }
                options={{
                    tabBarIcon: ({ size, color }) => (
                        < Icon
                            name='speedometer'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />
            <Tab.Screen
                name='Historical'
                component={ Historical }
                options={{
                    tabBarIcon: ({ size, color }) => (
                        < Icon
                            name='time'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />
            <Tab.Screen
                name='Alerts'
                component={ Alerts }
                options={{
                    tabBarIcon: ({ size, color }) => (
                        < Icon
                            name='alert-circle'
                            size={size}
                            color={color}
                        />
                    )
                }}

            />
        </Tab.Navigator>
    )
}

export default TabsNavigator