import React from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar, View, TouchableOpacity, Image } from 'react-native'
import { useFonts } from 'expo-font';
import { theme } from '../globalstyles';


import CountRegressive from '../components/CountRegressive';
import ListaJogada from '../components/ListaJogada';

import iconBtnNova from '../../assets/image-7.png'
import iconBtnPremi from '../../assets/image-8.png'
import iconBtnResult from '../../assets/image-9.png'

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
            <View style={{display: 'flex', alignItems: 'center'}} >
                <Text style={styles.titleContent}>Sua Jogada</Text>
                <ListaJogada />
            </View>
            <View style={styles.contentBtns}>
                <TouchableOpacity style={styles.BtnGrande}>
                    <Image source={iconBtnNova} style={styles.imgBtn}/>
                    <Text style={styles.titleBtn}>Nova Aposta</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnGrande}>
                    <Image source={iconBtnPremi} style={styles.imgBtn}/>
                    <Text style={styles.titleBtn}>Premiação</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.BtnGrande}>
                    <Image source={iconBtnResult} style={styles.imgBtn}/>
                    <Text style={styles.titleBtn}>Resultado</Text>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        display: 'flex',
        backgroundColor: theme.colors.primary75,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    titleName: {
        fontFamily: 'RajdhaniBold',
        fontSize: 28,
        color: theme.colors.white
    },
    titleContent: {
        fontFamily: 'RajdhaniBold',
        marginTop: 15,
        fontSize: 20,
        color: theme.colors.white,
    },
    BtnGrande:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.white,
        borderRadius: 5,
        padding: 8,
        width: '32%'
    },
    titleBtn:{
        fontFamily: 'RajdhaniBold',
        fontSize: 17,
        color: theme.colors.primary75
    },  
    imgBtn:{
        width: 50,
        height: 50,
        margin: 5
    },
    contentBtns:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    }
})
