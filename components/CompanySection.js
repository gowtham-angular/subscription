import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const CompanySection = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 5, marginHorizontal: 10 }}>
            {/* // FAQ */}
            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'About Us' })}
                style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,

                        }}
                        source={require("../assets/about_us.png")}
                    ></Image>
                    <Text style={{ color: '#524e51', fontSize: 12 }}>About us</Text>
                    <Text style={{ color: 'grey', fontSize: 10 }}>Expertised</Text>
                </View>
            </TouchableOpacity>

            {/* // Announcement */}
            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'Partner Program' })}
                style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5,
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,

                        }}
                        source={require("../assets/partner.png")}
                    ></Image>
                    <Text style={{ color: '#524e51', fontSize: 12 }}>Partner Program</Text>
                    <Text style={{ color: 'grey', fontSize: 10 }}>Welcome</Text>

                </View>
            </TouchableOpacity>

            {/* // Quick Deposits */}
            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'Terms and Conditions' })}
                style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,
                        }}
                        source={require("../assets/terms.png")}
                    ></Image>
                    <Text style={{ color: '#524e51', fontSize: 12 }} >Terms & conditions</Text>
                    <Text style={{ color: 'grey', fontSize: 10 }}>Supervision</Text>
                </View>
            </TouchableOpacity>

            {/* // Quick Withdraw */}
            <TouchableOpacity
                onPress={() => navigation.navigate('SectionNavigation', { screen: 'User Agreement' })}
                style={{
                    ...styles.shadow,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 5,
                    padding: 5
                }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 5,
                        }}
                        source={require("../assets/contract.png")}
                    ></Image>
                    <Text style={{ color: '#524e51', fontSize: 12 }} >User Agreement</Text>
                    <Text style={{ color: 'grey', fontSize: 10 }}>Protect your rights</Text>
                </View>
            </TouchableOpacity>


        </View>

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
        elevation: 5,
    }
})

export default CompanySection