import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel'
import Section from '../components/Section'
import { SafeAreaView } from 'react-native-safe-area-context'
import MallSection from '../components/MallSection'
import IncomeComponent from '../components/IncomeComponent'
import SubscriptionBanner from '../components/SubscriptionBanner'
import CompanySection from '../components/CompanySection'
import CommodityCard from '../components/CommodityCard'
const Home = ({ navigation }) => {
    const screenWidth = Dimensions.get("window").width;
    return (
        <View style={{ marginTop: 35 }}>
            {/* <ModalComponent /> */}
            <Carousel />
            <ScrollView>
                <SafeAreaView style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 20
                }}>
                    <Section />
                </SafeAreaView>
                <MallSection />
                <IncomeComponent />
                <CompanySection />
                <SubscriptionBanner />
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                }}>
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                    <CommodityCard />
                </View>
                <View
                    style={{
                        height: 320,
                        width: screenWidth
                    }}
                ></View>
            </ScrollView>
        </View>
    )
}

export default Home