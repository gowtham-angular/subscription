import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountInformation = () => {

    const submit = () => {
        alert('account information sumbitted');
    }
    return (
        <View style={{
            padding: 20
        }}>
            <View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginVertical: 18,
                    color: '#000',
                }}>
                    Account Name</Text>

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
                        placeholder='Enter the Name'
                        placeholderTextColor={COLORS.black}
                        style={{
                            width: "100%"
                        }}
                    />
                </View>
            </View>

            <View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginVertical: 18,
                    color: '#000',
                }}>
                    Account Number</Text>

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
                        placeholder='Enter the account number'
                        placeholderTextColor={COLORS.black}
                        style={{
                            width: "100%"
                        }}
                    />
                </View>
            </View>
            <View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginVertical: 18,
                    color: '#000',
                }}>
                    Bank Name</Text>

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
                        placeholder='Enter the Bank Name'
                        placeholderTextColor={COLORS.black}
                        style={{
                            width: "100%"
                        }}
                    />
                </View>
            </View>

            <View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginVertical: 18,
                    color: '#000',
                }}>
                    IFSC</Text>

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
                        placeholder='Enter the IFSC'
                        placeholderTextColor={COLORS.black}
                        style={{
                            width: "100%"
                        }}
                    />
                </View>
            </View>

            <View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 500,
                    marginVertical: 18,
                    color: '#000',
                }}>
                    UPI ID</Text>

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
                        placeholder='Enter the Upi ID'
                        placeholderTextColor={COLORS.black}
                        style={{
                            width: "100%"
                        }}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    style={{

                        backgroundColor: '#430A5D',
                        padding: 10,
                        borderRadius: 10,
                    }}
                    onPress={() => submit()}
                >
                    <Text style={{
                        fontSize: 14,
                        color: '#fff'
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AccountInformation