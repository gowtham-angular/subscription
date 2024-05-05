import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

const RechargeRecord = () => {

    const [isRecharged, setIsRecharged] = useState(false);

    if (!isRecharged) {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                padding: 15,
                gap: 10
            }}>
                <Image
                    style={{
                        height: 150,
                        width: 150,
                        borderRadius: 5,
                    }}
                    source={require("../assets/recharge.png")}
                ></Image>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>No Recharge has been made.</Text>
                <Text style={{ fontWeight: '400', fontSize: 14 }}>Recharge and Earn More!!!</Text>
            </View>
        )
    } else {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
                padding: 15,
                gap: 10
            }}>

                <View style={{
                    backgroundColor: '#15F5BA',
                    height: 70,
                    width: 300,
                    padding: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 10 }}>Recharge Amount : 2100</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12 }}>Date: 14-04-2024 20:16:30</Text>
                </View>

                <View style={{
                    backgroundColor: '#836FFF',
                    height: 70,
                    width: 300,
                    padding: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 10 }}>Recharge Amount : 2100</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12 }}>Date: 14-04-2024 20:16:30</Text>
                </View>

                <View style={{
                    backgroundColor: '#15F5BA',
                    height: 70,
                    width: 300,
                    padding: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 10 }}>Recharge Amount : 2100</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12 }}>Date: 14-04-2024 20:16:30</Text>
                </View>

                <View style={{
                    backgroundColor: '#836FFF',
                    height: 70,
                    width: 300,
                    padding: 10,
                    borderRadius: 15
                }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, marginBottom: 10 }}>Recharge Amount : 2100</Text>
                    <Text style={{ fontWeight: '400', fontSize: 12 }}>Date: 14-04-2024 20:16:30</Text>
                </View>
            </View>
        )
    }

}

export default RechargeRecord