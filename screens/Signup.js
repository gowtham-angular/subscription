import { View, Text, Image, Pressable, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';

import { database } from '../config/firebase';
import { collection, setDoc, doc, getDoc } from 'firebase/firestore';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [referralCode, setReferralCode] = useState('');


    const [documentData, setDocumentData] = useState({});

    useEffect(() => {
        const getDocument = async () => {
            const docRef = doc(collection(database, 'id'), 'lastId');
            const docSnap = await getDoc(docRef);

            if (docSnap.exists) {
                setDocumentData(docSnap.data());
            } else {
                // Handle the case where the document doesn't exist
                console.log("Document not found!");
            }
        };

        getDocument();
    }, ['lastId']);

    createCollection = async () => {

        try {
            const docId = (documentData['lastId'] + 1).toString();

            const userDocRef = doc(collection(database, 'users'), docId);
            const userData = {
                userName: username,
                email: email.toLowerCase(),
                referralCode: referralCode,
                password: password,
                id: docId,
                points: 0,
                profit: 0,
                totalAmount: 0,
                totalInvested: 0
            };

            setDoc(userDocRef, userData).then((data) => {
                const uniqueIdCollectionRef = doc(collection(database, 'id'), 'lastId');
                setDoc(uniqueIdCollectionRef, { lastId: Number(docId) }).then((id) => {
                    console.log('id is updated')
                })

            }).catch(err => {
                console.log(err);
            });

        } catch (err) {
            console.error("Error adding document: ", err);
        }

    }

    const checkAllValues = () => {
        if (!email) {
            ToastAndroid.show('Please enter the Email', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else if (!username) {
            ToastAndroid.show('Please enter the Username', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else if (!password) {
            ToastAndroid.show('Please enter the Password', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else if (!referralCode) {
            ToastAndroid.show('Please enter the Referral Code', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else if (!isChecked) {
            ToastAndroid.show('Please enter the Terms & Conditions', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        }
    }


    const handleSubmit = async () => {
        checkAllValues();
        if (email && password && username && referralCode && isChecked) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                createCollection();
            } catch (err) {
                ToastAndroid.show(err.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Create Account
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Connect with us to Earn today!</Text>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Username</Text>

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
                            placeholder='Enter your Username'
                            placeholderTextColor={COLORS.black}
                            onChangeText={text => setUserName(text)}
                            value={username}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

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
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            onChangeText={text => setEmail(text)}
                            value={email}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>

                {/* <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='+91'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "12%",
                                borderRightWidth: 1,
                                borderLeftColor: COLORS.grey,
                                height: "100%"
                            }}
                        />

                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "80%"
                            }}
                        />
                    </View>
                </View> */}

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

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
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Referral Code</Text>

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
                            placeholder='Enter your Referrel code'
                            placeholderTextColor={COLORS.black}
                            onChangeText={text => setReferralCode(text)}
                            value={referralCode}
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>I agree to the terms and conditions</Text>
                </View>


                <Button
                    title="Sign Up"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={() => handleSubmit()}
                />

                {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View> */}

                {/* <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    
                    <TouchableOpacity
                        onPress={() => handleSubmit}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 12
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signup