import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';

const SubscriptionBanner = () => {
    const screenWidth = Dimensions.get("window").width;
    return (
        <TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 25 }}>
                <View
                    style={{
                        height: 100,
                        width: screenWidth - 15,
                        backgroundColor: '#c10071',
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        margin: 10
                    }}
                >
                    <Image
                        style={{
                            height: 90,
                            width: 80,
                        }}
                        source={require("../assets/new-notification.png")}
                    ></Image>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 }}>SUBSCRIPTION MEMBERSHIP
                        </Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.grey }}> + Commision plus    </Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.grey }}> + More tasks   </Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: COLORS.grey }}> + 1V1 Service    </Text>
                    </View>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SubscriptionBanner