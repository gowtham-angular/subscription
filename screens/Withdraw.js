import { View, Text, Dimensions, TouchableOpacity, Button, TextInput } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors';

const Withdraw = () => {
    const screenWidth = Dimensions.get('window').width;

    const submitWithdraw = () => {
        alert("Withdrawal Submitted");
    }
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                height: 230,
                width: screenWidth - 20,
                margin: 20,
                backgroundColor: '#FFF8DC',
                borderRadius: 15,
                padding: 10

            }}>

                <View style={{ marginBottom: 12 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontSize: 16, color: 'black', marginBottom: 10 }}>Deposited Money</Text>
                            <Text style={{ fontSize: 16, color: 'black', marginBottom: 10, fontWeight: 600 }} >Profit</Text>
                            <Text style={{ fontSize: 16, color: 'black', marginBottom: 10 }}>Available for withdraw</Text>
                        </View>
                        <View style={{ flex: 1 }}>

                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <Text style={{fontSize: 16, color: '#00DFA2', marginBottom: 10, fontWeight: 600 }}>5627.00</Text>
                            <Text style={{fontSize: 16, color: '#0079FF', marginBottom: 10, fontWeight: 600 }}>562753.00</Text>
                            <Text style={{fontSize: 16, color: '#FF0060', marginBottom: 10, fontWeight: 600 }}>562753.00</Text>
                        </View>
                    </View>

                    <Text style={{
                        fontSize: 16,
                        fontWeight: 900,
                        marginVertical: 18,
                        color: '#000',
                    }}>Withdrawal Amount</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter the amount to be withdraw'
                            placeholderTextColor={COLORS.black}
                            style={{
                                width: "100%"
                            }}
                        />


                    </View>
                </View>

            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: '#430A5D',
                    padding: 10,
                    borderRadius: 10,

                }}

                onPress={() => submitWithdraw()}
            >
                <Text style={{
                    fontSize: 14,
                    color: '#fff'
                }}>Withdraw</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Withdraw