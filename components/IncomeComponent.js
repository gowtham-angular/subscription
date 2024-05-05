import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';

const IncomeComponent = () => {

    const screenWidth = Dimensions.get("window").width;
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
            <TouchableOpacity>
                <View
                    style={{
                        height: 80,
                        width: screenWidth - 15,
                        backgroundColor: '#1a469c',
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        margin: 10
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 }}>Recharge benefits
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.grey }}>Extra bonus of 10% for first recharge
                        </Text>
                    </View>

                    <Image
                        style={{
                            height: 70,
                            width: 80,
                        }}
                        source={require("../assets/dollar-coins.png")}
                    ></Image>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default IncomeComponent