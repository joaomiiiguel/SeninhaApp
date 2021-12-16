import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native'
import { theme } from '../globalstyles'

import { useFonts } from 'expo-font';
import Header from '../components/Header';

import Trofel from '../../assets/trophy.png'

export default function Premiacao({ navigation }) {
    const [fontsLoaded] = useFonts({
        RajdhaniRegular: require('../../assets/fonts/RajdhaniRegular.ttf'),
        RajdhaniSemiBold: require('../../assets/fonts/Rajdhani-SemiBold.ttf'),
        RajdhaniBold: require('../../assets/fonts/Rajdhani-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaView style={styles.containerRegula}>
            <Header nameHeader={'Premiação'} onPressGoBack={() => navigation.goBack()} />
            <View style={styles.contentPremiacao}>
                <View style={{alignItems: 'flex-end', width: '100%'}}>
                    <Text style={styles.text}>Grupo:</Text>
                    <Text style={[styles.textBold, {fontSize: 18}]}>2545</Text>
                </View>
                <Image source={Trofel} style={{ width: 100, height: 100, margin: 30 }} />
                <View style={{alignItems: 'center', marginBottom: 20}}>
                    <Text style={[styles.textBold, {fontSize: 30}]}>R$ 54.587,00</Text>
                    <Text style={styles.text}>Maior Ponto</Text>
                </View>
                <View style={{alignItems: 'center', marginBottom: 20}}>
                    <Text style={[styles.textBold, {fontSize: 20}]}>R$ 6.570,00</Text>
                    <Text style={styles.text}>Menor Ponto</Text>
                </View>
                <View style={styles.cardImport}>
                    <Text style={[styles.textBold, {textAlign: 'center', marginBottom: 10}]}>IMPORTANTE</Text>
                    <Text style={styles.text}>Maior Ponto - Para quem marcar 10 Pontos</Text>
                    <Text style={styles.text}>Menor Ponto - Para quem marcar a menor pontuação</Text>
                    <Text style={styles.text}>Caso tenha mais de 01 ganhador, o prêmio será dividido</Text>
                </View>

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    containerRegula: {
        flex: 1,
        display: 'flex',
        backgroundColor: theme.colors.primary75,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        textAlign: 'center'
    },
    titleRegul: {
        fontFamily: 'RajdhaniBold',
        color: theme.colors.white,
        fontSize: 22,
        marginTop: 40,
    },
    subtitleRegul: {
        fontFamily: 'RajdhaniBold',
        color: theme.colors.white,
        fontSize: 18,
        marginTop: 20,
    },
    text: {
        fontFamily: 'RajdhaniRegular',
        color: theme.colors.white,
        textAlign: 'left',
    },
    textBold: {
        fontFamily: 'RajdhaniBold',
        color: theme.colors.white,
        textAlign: 'left',
    },
    contentPremiacao:{
        display: 'flex',
        alignItems:'center',
        marginTop: 30
    },
    cardImport:{
        width: '80%',
        backgroundColor: theme.colors.primary50,
        padding: 20,
        borderRadius: 5
    }

})
