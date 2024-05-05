import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

const Reading = () => {
    const [isReading, setIsReading] = useState(false);

    if (!isReading) {
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
                    source={require("../assets/reading.png")}
                ></Image>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>No Reading has been made.</Text>

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
            </View>
        )
    }
}

export default Reading