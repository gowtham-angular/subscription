import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Terms = () => {
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
        >Earning Program Terms & Conditions</Text>

        <Text
          style={{
            ...styles.para
          }}
        >These terms and conditions ("Terms") govern your participation in the Earning Program ("Program") offered by [Company Name]. By participating in the Program, you agree to be bound by these Terms. If you do not agree to these Terms, you may not participate in the Program.</Text>



        <Text style={{ ...styles.heading }}>1. Eligibility:
          <Text style={{ ...styles.para }}> Earn generous commissions for every user you refer to who successfully engages with our earning opportunities.</Text>
          <Text style={{ ...styles.para }}> Residents of certain countries may not be eligible to participate in the Program due to legal restrictions. It is your responsibility to ensure compliance with applicable laws in your jurisdiction.</Text>
        </Text>

        <Text style={{ ...styles.heading }}>2. Participation:
          <Text style={{ ...styles.para }}> Participation in the Program is voluntary. You are not obligated to participate in any activity that you do not wish to.</Text>
          <Text style={{ ...styles.para }}> You agree to provide accurate and truthful information when participating in the Program.</Text>
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
        <Text style={{ ...styles.heading }}>8. Changes to Terms:
          <Text style={{ ...styles.para }}> [Company Name] reserves the right to modify these Terms at any time without prior notice. It is your responsibility to review these Terms periodically for changes.</Text>
        </Text>
        <Text style={{ ...styles.heading }}>By participating in the Program, you acknowledge that you have read, understood, and agree to be bound by these Terms.
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

export default Terms