import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const CommodityCard = () => {
    return (
        <View>
            <TouchableOpacity>
                <View
                    style={{
                        height: 170,
                        width: 170,
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: '#ffff',
                        padding: 5,
                        margin: 5,
                        borderRadius: 15

                    }}
                >
                    <Image
                        style={{
                            height: 70,
                            width: 80,
                        }}
                        source={require("../assets/dollar-coins.png")}
                    ></Image>
                    <View style={{flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 16 }}>Snow Man</Text>
                        <Text style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 16, marginTop:5 }}>500</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CommodityCard