import { View, Text, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const ModalComponent = () => {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    return (
        <SafeAreaView style={styles.fill}>
            <Text>Modal</Text>
            <Button title="show" onPress={show}></Button>

            <Modal visible={visible} />
            <SafeAreaView style={[styles.fill, styles.grey]}>
                <Button title="hide" onPress={hide}></Button>
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default ModalComponent

const styles = StyleSheet.create({
    fill: { flex: 1 },
    grey: { backgroundColor: '#DDD' },
})