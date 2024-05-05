import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs'

const Layout = ({navigation}) => {
  return (
    <Tabs {...navigation} />
  )
}

export default Layout