import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ListaJogada() {
    return (
        <View style={styles.contentListNumber}>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
            <Text style={styles.boxNumber}>02</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contentListNumber:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        maxWidth: '280px'
    },
    boxNumber:{
        backgroundColor: '#1D72DE',
        marginBottom: 10,
        padding: 12,
        borderRadius: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    }
})
