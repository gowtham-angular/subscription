import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Section = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
                {/* // FAQ */}
                <TouchableOpacity style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5

                }}
                    onPress={() => navigation.navigate('SectionNavigation', { screen: 'Faq' })}
                >
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 5,

                            }}
                            source={require("../assets/faq-chat.png")}
                        ></Image>
                        <Text style={{ color: 'grey', fontSize: 12 }}>FAQ</Text>
                    </View>
                </TouchableOpacity>

                {/* // Announcement */}
                <TouchableOpacity style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5,
                }}
                    onPress={() => navigation.navigate('SectionNavigation', { screen: 'Announcement' })}
                >
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 5,

                            }}
                            source={require("../assets/megaphone.png")}
                        ></Image>
                        <Text style={{ color: 'grey', fontSize: 12 }}>Announcement</Text>
                    </View>
                </TouchableOpacity>

                {/* // Quick Deposits */}
                <TouchableOpacity style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}
                    onPress={() => navigation.navigate('SectionNavigation', { screen: 'Deposit' })}
                >
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 5,
                            }}
                            source={require("../assets/money-bag.png")}
                        ></Image>
                        <Text style={{ color: 'grey', fontSize: 12 }} >Quick Deposit</Text>
                    </View>
                </TouchableOpacity>

                {/* // Quick Withdraw */}
                <TouchableOpacity style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}
                    onPress={() => navigation.navigate('SectionNavigation', { screen: 'Withdraw' })}
                >
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                height: 60,
                                width: 60,
                                borderRadius: 5,
                            }}
                            source={require("../assets/suitcase-with-cash.png")}
                        ></Image>
                        <Text style={{ color: 'grey', fontSize: 12 }} >Quick Withdraw</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </>
    )

}
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default Section