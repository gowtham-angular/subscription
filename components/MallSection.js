import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MallSection = () => {
    const navigation = useNavigation();

    const InviteFriends = () => {
        alert("Please contact customer care to Invite Friends");
    }
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 15, gap: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View
                    style={{
                        height: 70,
                        width: 150,
                        backgroundColor: '#392dad',
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 10
                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>Reading Mall</Text>
                    <Image
                        style={{
                            height: 70,
                            width: 80,
                        }}
                        source={require("../assets/readingpng.png")}
                    ></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => InviteFriends()}
            >
                <View
                    style={{
                        height: 70,
                        width: 150,
                        backgroundColor: '#6c178e',
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingHorizontal: 10

                    }}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff' }}>Invite Friends</Text>
                    <Image
                        style={{
                            height: 70,
                            width: 80,
                        }}
                        source={require("../assets/invite.png")}
                    ></Image>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MallSection