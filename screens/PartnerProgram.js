import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const PartnerProgram = () => {
  return (
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
      >Earn Together, Succeed Together !!!</Text>

      <Text
        style={{
          ...styles.para
        }}
      >Join the Partner Program and unlock new opportunities to earn together with us. As a valued partner, you'll enjoy exclusive benefits, resources, and support to maximize your earning potential and grow your business.</Text>


      <Text style={{ ...styles.heading }}>Benefits of Partnering with us.</Text>

      <Text style={{ ...styles.heading }}>Lucrative Commission Structure:
        <Text style={{ ...styles.para }}> Earn generous commissions for every user you refer to who successfully engages with our earning opportunities.</Text>
      </Text>

      <Text style={{ ...styles.heading }}>Dedicated Support:
        <Text style={{ ...styles.para }}> Gain access to a dedicated partner support team ready to assist you with any questions, concerns, or assistance you may need.</Text>
      </Text>

      <Text style={{ ...styles.heading }}>Marketing Resources:
        <Text style={{ ...styles.para }}> Access a wealth of marketing materials, including banners, graphics, and promotional content, to help you effectively promote to your audience.</Text>
      </Text>

      <Text style={{ ...styles.heading }}>Customizable Solutions:
        <Text style={{ ...styles.para }}> Tailor our earning programs to suit the needs of your audience, whether you're a blogger, influencer, website owner, or business owner.</Text>
      </Text>

      <Text style={{ ...styles.heading }}>Exclusive Insights
        <Text style={{ ...styles.para }}> Stay informed with exclusive updates, insights, and trends in the earning industry to help you optimize your earning strategies and stay ahead of the curve.</Text>
      </Text>

    </View>
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
export default PartnerProgram