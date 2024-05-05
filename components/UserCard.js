import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth';
import { collection, doc, getDoc } from 'firebase/firestore';
import { database } from '../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserCard = () => {
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
                backgroundColor: '#FFF5E0',
                height: 130,
                width: screenWidth - 20,
                borderRadius: 15,
                ...styles.shadow,
                paddingHorizontal: 10,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 10,
            }}>
            <View>
                <Image
                    style={{
                        height: 80,
                        width: 80,
                        borderRadius: 40,
                        backgroundColor: '#ffff'
                    }}
                    source={require("../assets/stylish-boy.png")}
                ></Image>
            </View>


            <View style={{
                marginTop: 10,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >{data?.username}</Text>
                <Text
                    style={{
                        backgroundColor: '#F2613F',
                        padding: 5,
                        marginTop: 5,
                        color: '#fff',
                        fontSize: 14,
                        borderRadius: 10
                    }}
                >ID: 10209</Text>
            </View>
            <View
                style={{
                    flex: 1
                }}
            ></View>
            <View
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    backgroundColor: '#141E46',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{
                    color: '#ffff',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>90</Text>
                <Text
                    style={{
                        color: '#fff',
                        fontSize: 16
                    }}
                >Points</Text>
            </View>
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

export default UserCard;