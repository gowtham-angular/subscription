import React from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from 'react-native';

const Faq = () => {

    const DATA = [
        {
            id: '1',
            question: 'What is an earning program?',
            answer: 'An earning program is a system or platform that allows individuals to generate income.',
        },
        {
            id: '2',
            question: 'How do earning programs work?',
            answer: 'Earning programs typically involve users performing specific tasks.',
        },
        {
            id: '3',
            question: 'Are earning programs legitimate ?',
            answer: 'Yes, Our earning programs are legitimate and offer genuine opportunities to earn money.',
        },
        {
            id: '4',
            question: 'How much money can I make with earning programs?',
            answer: 'Earnings from programs vary widely depending on factors such as the type of program, the amount of time and effort invested, market demand, and individual skill level. Some users may earn a modest side income, while others may generate significant revenue.',
        },
        {
            id: '5',
            question: 'Do earning programs require upfront investment?',
            answer: ' Our earning programs may require a small initial investment, such as purchasing inventory for a dropshipping business ',
        },
        {
            id: '6',
            question: 'What skills or qualifications do I need to participate in earning programs?',
            answer: 'No special skills required, anyone with accessible with an internet connection.',
        },
        {
            id: '7',
            question: 'How do I get paid through earning programs?',
            answer: 'Through direct bank transfers.',
        },
        {
            id: '8',
            question: 'Are earning programs suitable for everyone?',
            answer: 'Earning programs can be suitable for a wide range of individuals, including students, stay-at-home parents, retirees, and professionals looking to supplement their income. ',
        }
    ];

    const Item = ({ answer, question }) => (
        <View style={styles.item}>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.answer}>Answer: {answer}</Text>
        </View>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item answer={item.answer} question={item.question} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#F3D0D7',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    answer: {
        fontSize: 14,
        fontWeight: '400',
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default Faq