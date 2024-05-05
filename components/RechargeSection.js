import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RechargeSection = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            gap: 10

        }}>


            {/* // Quick Deposits */}
            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'Deposit' })}
                style={{
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,
                        }}
                        source={require("../assets/money-bag.png")}
                    ></Image>
                    <Text style={{ color: 'grey', fontSize: 12 }} >Recharge</Text>
                </View>
            </TouchableOpacity>

            {/* // Quick Withdraw */}
            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'Account Information' })}
                style={{
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,
                        }}
                        source={require("../assets/about_us.png")}
                    ></Image>
                    <Text style={{ color: 'grey', fontSize: 12 }} >Account Info</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'Recharge Record' })}
                style={{
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,

                        }}
                        source={require("../assets/orders.png")}
                    ></Image>
                    <Text style={{ color: 'grey', fontSize: 12 }}>Recharge record</Text>
                </View>
            </TouchableOpacity>

            {/* // Withdrawal */}
            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'Withdrawal Record' })}
                style={{
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5,
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,
                        }}
                        source={require("../assets/floppy-disk.png")}
                    ></Image>
                    <Text style={{ color: 'grey', fontSize: 12 }}>Withdrawal Record</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default RechargeSection