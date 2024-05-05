import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const RechargeBanner = () => {

    const screenWidth = Dimensions.get('window').width;
    return (
        <SafeAreaView
            style={{
                marginHorizontal: 10,
                marginVertical: 15,
                backgroundColor: '#0C0C0C',
                height: 70,
                width: screenWidth - 20,
                borderRadius: 15,
                ...styles.shadow,
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
            }}>
            <View>
                <Image
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        backgroundColor: '#ffff'
                    }}
                    source={require("../assets/money-bag.png")}
                ></Image>
            </View>


            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        color: '#F2613F'
                    }}
                >Extra bonus of 100 for first Recharge</Text>
              
            </View>
            <View
                style={{
                    flex: 1
                }}
            ></View>
            <TouchableOpacity
                style={{
                    height: 30,
                    width: 50,
                    borderRadius: 10,
                    backgroundColor: '#fff',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                
                <Text
                    style={{
                        color: '#F2613F',
                        fontSize: 16,
                        fontWeight: 'bold'
                    }}
                >GO</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 30
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 50,
    }
})


export default RechargeBanner