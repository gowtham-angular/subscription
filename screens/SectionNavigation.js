import { View, Text } from 'react-native'
import React from 'react'
import Faq from './Faq'
import Announcement from './Announcement'
import Deposit from './Deposit'
import Withdraw from './Withdraw'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutUs from './AboutUs'
import PartnerProgram from './PartnerProgram'
import Terms from './Terms'
import UserAgreement from './UserAgreement'
import AccountInformation from './AccountInformation'
import RechargeRecord from './RechargeRecord'
import WithdrawalRecord from './WithdrawalRecord'

const SectionNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Faq" component={Faq} />
            <Stack.Screen name="Announcement" component={Announcement} />
            <Stack.Screen name="Deposit" component={Deposit} />
            <Stack.Screen name="Withdraw" component={Withdraw} />
            <Stack.Screen name="About Us" component={AboutUs} />
            <Stack.Screen name="Partner Program" component={PartnerProgram} />
            <Stack.Screen name="Terms and Conditions" component={Terms} />
            <Stack.Screen name="User Agreement" component={UserAgreement} />
            <Stack.Screen name="Account Information" component={AccountInformation} />
            <Stack.Screen name="Recharge Record" component={RechargeRecord} />
            <Stack.Screen name="Withdrawal Record" component={WithdrawalRecord} />
        </Stack.Navigator>
    )
}

export default SectionNavigation