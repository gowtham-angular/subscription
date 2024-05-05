import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'

const RankingTasks = () => {
    const [isRanking, setIsRanking] = useState(false);

    if (!isRanking) {
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
                    source={require("../assets/ranking.png")}
                ></Image>
                <Text style={{ fontWeight: '700', fontSize: 16 }}>No Ranking has been made.</Text>

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

export default RankingTasks