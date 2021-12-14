import React from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar, View } from 'react-native'
import { useFonts } from 'expo-font';

import CountRegressive from '../components/CountRegressive';

export default function HomeScreen() {
    const user = 'Miguel'
    const [fontsLoaded] = useFonts({
        RajdhaniRegular: require('../../assets/fonts/RajdhaniRegular.ttf'),
        RajdhaniSemiBold: require('../../assets/fonts/Rajdhani-SemiBold.ttf'),
        RajdhaniBold: require('../../assets/fonts/Rajdhani-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaView style={styles.containerHome}>
            <StatusBar backgroundColor={'#003065'} />
            <View>
                <Text style={styles.titleName}>Olá, {user}</Text>
                <Text style={{ fontFamily: 'RajdhaniRegular', color: '#FFF' }}>Já fez sua aposta hoje?</Text>
            </View>
            <CountRegressive />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#003065',
        paddingHorizontal: 25,
        paddingTop: StatusBar.currentHeight + 10,
    },
    titleName: {
        fontFamily: 'RajdhaniBold',
        fontSize: 28,
        color: '#FFF'
    }
})
