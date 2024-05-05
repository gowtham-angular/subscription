import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const UserAgreement = () => {
  return (
    <ScrollView >
      <View style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10,
        padding: 15
      }}>

        <Text
          style={{
            ...styles.heading,
            fontSize: 20
          }}
        >User Agreement</Text>

        <Text
          style={{
            ...styles.para
          }}
        >This User Agreement ("Agreement") is a legally binding contract between you ("User") and [Company Name] governing your use of the [Company Name] Earning Program ("Program"). By accessing or using the Program, you agree to be bound by this Agreement. If you do not agree to this Agreement, you may not access or use the Program.</Text>

        <Text style={{ ...styles.heading }}>1. Participation in the Program:
          <Text style={{ ...styles.para }}> Participation in the Program is voluntary and subject to eligibility requirements as determined by [Company Name].</Text>
          <Text style={{ ...styles.para }}>By participating in the Program, you agree to comply with all applicable laws, regulations, and this Agreement.</Text>
        </Text>

        <Text style={{ ...styles.heading }}>2. Account Registration:
          <Text style={{ ...styles.para }}> To access certain features of the Program, you may be required to create an account. You agree to provide accurate and complete information when creating your account.</Text>
          <Text style={{ ...styles.para }}> You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</Text>
        </Text>

        <Text style={{ ...styles.heading }}>3. Earning Opportunities:
          <Text style={{ ...styles.para }}> [Company Name] may offer various earning opportunities through the Program, including but not limited to surveys, tasks, offers, referrals, and other activities.</Text>
          <Text style={{ ...styles.para }}> Earnings are based on completed actions and are subject to verification by [Company Name].</Text>
        </Text>

        <Text style={{ ...styles.heading }}>4. Payment:
          <Text style={{ ...styles.para }}> Earnings accumulated through the Program will be paid out according to the payment schedule specified by [Company Name].</Text>
          <Text style={{ ...styles.para }}> Earnings accumulated through the Program will be paid out according to the payment schedule specified by [Company Name].</Text>
          <Text style={{ ...styles.para }}> [Company Name] reserves the right to withhold payment if it suspects fraudulent activity or violation of these Terms.</Text>
        </Text>

        <Text style={{ ...styles.heading }}>5. Prohibited Activities:
          <Text style={{ ...styles.para }}> You agree not to engage in any fraudulent, deceptive, or unlawful activities in connection with the Program.</Text>
          <Text style={{ ...styles.para }}> Prohibited activities include, but are not limited to, using automated scripts, bots, or other unauthorized means to earn rewards, as well as engaging in any form of cheating or abuse of the Program.</Text>
        </Text>
        <Text style={{ ...styles.heading }}>6. Termination:
          <Text style={{ ...styles.para }}> [Company Name] reserves the right to terminate your participation in the Program at any time for any reason, including but not limited to violation of these Terms or suspicion of fraudulent activity.</Text>
          <Text style={{ ...styles.para }}> Upon termination, you forfeit any accumulated earnings and may be prohibited from participating in future programs offered by [Company Name].</Text>
        </Text>
        <Text style={{ ...styles.heading }}>7. Limitation of Liability:
          <Text style={{ ...styles.para }}> [Company Name] shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the Program.</Text>
          <Text style={{ ...styles.para }}>In no event shall [Company Name]'s total liability to you for all damages, losses, and causes of action exceed the amount paid to you through the Program.</Text>
        </Text>
        <Text style={{ ...styles.heading }}>8. Changes to Agreement:
          <Text style={{ ...styles.para }}> [Company Name] reserves the right to modify this Agreement at any time without prior notice. It is your responsibility to review this Agreement periodically for changes.</Text>
        </Text>
        <Text style={{ ...styles.heading }}>9. Governing Law:
          <Text style={{ ...styles.para }}> This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</Text>
        </Text>
        <Text style={{ ...styles.heading }}>By accessing or using the Program, you acknowledge that you have read, understood, and agree to be bound by this Agreement.
        </Text>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 10
  },
  para: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 10
  }
})

export default UserAgreement