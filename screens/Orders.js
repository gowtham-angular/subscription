import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RankingTasks from './RankingTasks';
import Reading from './Reading';

const Tab = createMaterialTopTabNavigator();

const Orders = () => {
  return (
    <>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 130,
        backgroundColor: '#F3D0D7'

      }}
    >
      <View>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}>
          Order History
        </Text>
        <Text
          style={{
            fontSize: 12,
            marginTop: 5
          }}>
          Data provided by the system
        </Text>
      </View>
      <View style={{
        flex: 1
      }}>

      </View>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }}>
        <Text>Account Balance</Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold'
          }}>4555</Text>
      </View>

      
    </View>
    <Tab.Navigator>
          <Tab.Screen name="Ranking Tasks" component={RankingTasks} />
          <Tab.Screen name="Reading" component={Reading} />
        </Tab.Navigator>
    </>
  )
}

export default Orders