import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Announcement = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100
        }}>
            <Image
                source={require("../assets/megaphone.png")}
                resizeMode='contain'
                style={{
                    width: 100,
                    height: 100,
                }}
            ></Image>
            <Text style={{ fontSize: 16, marginTop: 3 }}>Currently No Announcements!!!</Text>
            <Text style={{ fontSize: 12, marginVertical: 10 }}>Please come back later.</Text>

            <Button style={{ marginTop: 30 }} title="Go back" onPress={() => navigation.goBack()}></Button>
        </View>
    )
}

export default Announcement