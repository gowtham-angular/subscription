import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';

const Support = () => {
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={['#876ce4', '#220d6b']}
        >
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                margin: 10,
                padding: 10
            }}>
                {/* <View>
                    <Text style={{ color: '#fff', fontSize: 36, fontWeight: 'bold' }}>Online Service</Text>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>If you need help, please contact us.</Text>
                </View> */}
                <TouchableOpacity>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 10, padding: 20, borderRadius: 10
                        }}>

                        <View><Text>Online Customer Service</Text>
                            <Text style={{ color: '#97015b', fontSize: 24, fontWeight: 'bold' }}>Online Time 9:00 - 21:00</Text></View>
                        <View>
                            <Image
                                style={{
                                    height: 50,
                                    width: 50,
                                }}
                                source={require("../assets/support.png")}
                            ></Image>
                        </View>
                    </View>

                </TouchableOpacity>

            </View>
        </LinearGradient >
    )
}

export default Support