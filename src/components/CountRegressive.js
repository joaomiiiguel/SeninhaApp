import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';

export default function CountRegressive() {
    const [fontsLoaded] = useFonts({
        RajdhaniRegular: require('../../assets/fonts/RajdhaniRegular.ttf'),
        RajdhaniSemiBold: require('../../assets/fonts/Rajdhani-SemiBold.ttf'),
        RajdhaniBold: require('../../assets/fonts/Rajdhani-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.containerCount}>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: 5}}><Text style={{color: '#FFF'}}>Próximo Sorteio:</Text><Text style={{color: '#FFF', fontWeight: 'bold'}}> 26 de Setembro 2021</Text></View>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                <View style={styles.cardNumberCount}>
                    <Text style={styles.numberCount}>00</Text>
                    <Text style={{color: '#FFF', fontSize: 12}}>dias</Text>
                </View>
                <Text style={{color: '#FFF', fontWeight:'bold', fontSize: 25, marginBottom: 15}}>:</Text>
                <View style={styles.cardNumberCount}>
                    <Text style={styles.numberCount}>00</Text>
                    <Text style={{color: '#FFF', fontSize: 12}}>horas</Text>
                </View>
                <Text style={{color: '#FFF', fontWeight:'bold', fontSize: 25, marginBottom: 15}}>:</Text>
                <View style={styles.cardNumberCount}>
                    <Text style={styles.numberCount}>00</Text>
                    <Text style={{color: '#FFF', fontSize: 12}}>minutos</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCount:{
        backgroundColor: '#1D72DE',
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10
    },
    cardNumberCount:{
        alignItems: 'center',
        width: '20%',
        marginRight: 15,
        marginLeft: 15
    },
    numberCount:{
        fontSize: 30,
        fontFamily: 'RajdhaniBold',
        backgroundColor: '#003065',
        marginTop: 15,
        padding: 8,
        borderRadius: 5,
        color: '#FFF',
        
    }
})
