import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Deposit = () => {
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100
        }}>
            <Image
                source={require("../assets/money-bag.png")}
                resizeMode='contain'
                style={{
                    width: 100,
                    height: 100,
                }}
            ></Image>
            <Text style={{ fontSize: 16, marginTop: 3 }}>Currently facing issues in direct deposit</Text>
            <Text style={{ fontSize: 12, marginVertical: 10 }}>Contact Customer Care for Quick Deposit.</Text>

            <Button style={{ marginTop: 30 }} title="Go Back"
                onPress={() => navigation.goBack()}
            ></Button>
        </View>
    )
}

export default Deposit