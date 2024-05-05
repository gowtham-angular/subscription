import { View, Text } from 'react-native'
import React from 'react'

const AboutUs = () => {
    return (
        <View style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginVertical: 30,
            padding: 15
        }}>
            <Text
                style={{
                    fontSize: 14,
                    fontWeight: 500,
                    textAlign: 'justify',
                    lineHeight: 24,
                    marginBottom: 10
                }}
            >We believe in empowering individuals to unlock their earning potential and achieve financial independence. Our platform provides a diverse range of opportunities for users to earn money through various means.</Text>

            <Text
                style={{
                    fontSize: 14,
                    fontWeight: 500,
                    textAlign: 'justify',
                    lineHeight: 24,
                    marginBottom: 10
                }}
            >
                Founded on the principle of democratizing wealth creation, we strive to make earning accessible to everyone, regardless of their background or expertise. Whether you're a seasoned professional, a stay-at-home parent, a student, or an aspiring entrepreneur, our platform offers opportunities for you to thrive in the digital economy.
            </Text>

            <Text
                style={{
                    fontSize: 14,
                    fontWeight: 500,
                    textAlign: 'justify',
                    lineHeight: 24,
                    marginBottom: 10
                }}
            >
                With a commitment to transparency, integrity, and innovation, we continuously seek to improve our platform and expand our offerings to meet the evolving needs of our users. Our team is dedicated to providing reliable support, valuable resources, and a vibrant community where users can learn, grow, and succeed together.
            </Text>

            <Text
                style={{
                    fontSize: 14,
                    fontWeight: 500,
                    textAlign: 'justify',
                    lineHeight: 24,
                    marginBottom: 10
                }}
            >
                Join today and embark on your journey towards financial freedom. Together, let's redefine what it means to earn a living in the digital age.


            </Text>
        </View>
    )
}

export default AboutUs