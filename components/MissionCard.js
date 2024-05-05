import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import { collection, doc, getDoc } from 'firebase/firestore';
import { database } from '../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

const MissionCard = () => {
    const { user } = useAuth();
    const [data, setData] = useState('');

    const screenWidth = Dimensions.get("window").width

    useEffect(() => {
        getUserDetails();
    }, [])

    getUserDetails = async () => {
        try {
            const usersCollection = collection(database, 'users');
            const documentId = 'docId_' + (user?.email).split('@')[0]; // Replace with the actual ID
            const documentRef = doc(usersCollection, documentId);

            console.log(user.email, '234234');

            await getDoc(documentRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {

                        const data = docSnapshot.data();
                        console.log(data?.password);
                        setData(data);
                    } else {
                        console.log('No such document!');
                    }
                })
                .catch(error => {
                    console.error('Error getting document:', error);
                });
        } catch (err) {
            console.error("Error adding document: ", err);
        }
    }
    return (
        <SafeAreaView
            style={{
                marginHorizontal: 10,
                marginVertical: 5,
                backgroundColor: '#FFC94A',
                height: 130,
                width: screenWidth - 20,
                borderRadius: 15,
                ...styles.shadow,
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>

            <View
                style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                }}>
                <Text
                    style={{
                        marginLeft: 5,
                        color: '#000',
                        fontSize: 14,
                        fontWeight: '600'
                    }}>
                    Mission is in progress</Text>
                <Text
                    style={{
                        color: '#000',
                        fontSize: 32,
                        fontWeight: 'bold'
                    }}
                > ₹ 200000.56</Text>
                <Text
                    style={{
                        marginLeft: 5,
                        color: '#000',
                        fontSize: 14,
                        fontWeight: '600'
                    }}>
                    Completed quantity: 0</Text>
            </View>
            <View
                style={{
                    flex: 1
                }}
            ></View>
            <TouchableOpacity
                style={{
                    height: 40,
                    width: 120,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: '#453F78',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20
                }}
            >

                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16
                    }}
                >To Complete</Text>
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
export default MissionCard