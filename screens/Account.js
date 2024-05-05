import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import COLORS from '../constants/colors';
import { LinearGradient } from "expo-linear-gradient";
import UserCard from '../components/UserCard';
import BalanceCard from '../components/BalanceCard';
import MissionCard from '../components/MissionCard';
import RechargeSection from '../components/RechargeSection';
import RechargeBanner from '../components/RechargeBanner';

const Account = ({ navigation }) => {

    const handleLogout = async () => {
        await signOut(auth);
    }
    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={['#FFBE98', '#FEECE2']}
        >
            <SafeAreaView  >
                <View style={{ ...styles.container }}>
                    <View style={{ flex: 1 }}>
                    </View>
                    <TouchableOpacity style={{ ...styles.logout }} onPress={handleLogout}>
                        <Text style={{ fontSize: 16, color: COLORS.primary }}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <UserCard></UserCard>
                    <BalanceCard></BalanceCard>
                    <MissionCard />
                </View>
                <View>
                    <RechargeSection />
                </View>
                <View>
                    <RechargeBanner/>
                </View>
            </SafeAreaView>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,

    },
    logout: {
        alignSelf: 'flex-end',
        backgroundColor: COLORS.white,
        padding: 7,
        borderRadius: 3,


    }
})

export default Account