import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CountRegressive() {
    return (
        <View style={styles.containerCount}>
            <Text>Próximo Sorteio:</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCount:{
        width: '100%',
        backgroundColor: '#1D72DE',
        borderRadius: 5,
        padding: 10,
    }
})
