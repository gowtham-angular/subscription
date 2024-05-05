import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome';
import Home from './Home';
import Support from './Support';
import Account from './Account';
import Play from './Play';
import Orders from './Orders';
import COLORS from '../constants/colors';
import Faq from './Faq';
import Announcement from './Announcement';
import Deposit from './Deposit';
import Withdraw from './Withdraw';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: COLORS.secondary
        }}>
            {children}
        </View>


    </TouchableOpacity>
)
const Tabs = ({navigation}) => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {

                    position: 'absolute',
                    bottom: 5,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 70,
                    ...styles.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/home.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94",
                                }}
                            ></Image>
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12, top: 3 }}>HOME</Text>
                        </View>
                    ),
                }}

            />
           
            <Tab.Screen name="Customer Support" component={Support}

                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/chat.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94",
                                }}
                            ></Image>
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12, top: 3 }}>SUPPORT</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Play" component={Play}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("../assets/victory.png")}
                            resizeMode='contain'
                            style={{
                                width: 35,
                                height: 35,
                                tintColor: "#ffff",
                            }}
                        ></Image>
                    ),

                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}

            />
            <Tab.Screen name="Orders" component={Orders}

                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/orders.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94",
                                }}
                            ></Image>
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12, top: 3 }}>ORDERS</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Account" component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                            <Image
                                source={require("../assets/account.png")}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94",
                                }}
                            ></Image>
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12, top: 3 }}>ACCOUNT</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;