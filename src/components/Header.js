import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { theme } from '../globalstyles';


export default function Header({nameHeader, onPressGoBack}) {
    const [fontsLoaded] = useFonts({
        RajdhaniBold: require('../../assets/fonts/Rajdhani-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity onPress={onPressGoBack}>
                <Ionicons name="arrow-back-outline" size={25} color="white" />
            </TouchableOpacity>
            <Text style={styles.titleHeader}>{nameHeader}</Text>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    titleHeader:{
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: 'RajdhaniBold',
    }
})
