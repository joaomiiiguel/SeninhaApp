import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { theme } from '../globalstyles'

import { useFonts } from 'expo-font';
import Header from '../components/Header';


export default function Resultado({ navigation }) {
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
            <Header nameHeader={'Resultado'} onPressGoBack={() => navigation.goBack()} />
            <View>
                
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
    textRegul: {
        fontFamily: 'RajdhaniRegular',
        color: theme.colors.white,
        fontSize: 16,
        marginTop: 20,
        textAlign: 'left'
    }

})
