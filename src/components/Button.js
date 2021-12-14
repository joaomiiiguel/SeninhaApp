import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';

export default function Button({nameButton, onPress}) {
    const [fontsLoaded] = useFonts({
        RajdhaniRegular: require('../../assets/fonts/RajdhaniRegular.ttf'),
        RajdhaniSemiBold: require('../../assets/fonts/Rajdhani-SemiBold.ttf'),
        RajdhaniBold: require('../../assets/fonts/Rajdhani-Bold.ttf'),
      });

      if (!fontsLoaded) {
        return null;
     }
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textButton}>{nameButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonStyle:{
        width: '100%', 
        display: 'flex',
        alignItems:'center',
        backgroundColor: '#1D72DE',
        paddingVertical: 15,
        borderRadius: 5,
    },
    textButton:{
        color: '#FFF',
        fontFamily: 'RajdhaniSemiBold',
        fontSize: 16
    }
})
