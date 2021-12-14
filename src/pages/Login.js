import React, {useState} from 'react'
import { Image, StyleSheet, Text, SafeAreaView, View, TextInput, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font';
import Button from '../components/Button';

export default function Login({navigation}) {
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const [fontsLoaded] = useFonts({
        RajdhaniRegular: require('../../assets/fonts/RajdhaniRegular.ttf'),
        RajdhaniSemiBold: require('../../assets/fonts/Rajdhani-SemiBold.ttf'),
        RajdhaniBold: require('../../assets/fonts/Rajdhani-Bold.ttf'),
      });

      if (!fontsLoaded) {
        return null;
     }

    return (
        <SafeAreaView style={styles.containerLogin}>
            <View style={styles.contentLogin}>
                <View style={styles.TitleArea}>
                    <Text style={styles.TextTitulo}>Olá! Seja bem vindo.</Text>
                    <Text style={styles.TextSubTitulo}>Faça seu login</Text>
                </View>
                <View style={styles.FormArea}>
                    <TextInput
                        style={styles.input}
                        value={user}
                        onChangeText={setUser}
                        placeholder="E-mail"
                        placeholderTextColor="#FFF"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        placeholderTextColor="#FFF"
                        secureTextEntry={true}
                    />

                </View>
                <View style={styles.FormArea}>
                    <Button nameButton={'Entrar'} onPress={() => navigation.navigate('HomeScreen')} />
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    containerLogin: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#003065'

    },
    contentLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        width: '100%',
    },
    backImg: {
        position: 'absolute',
        top: 0,
        height: 250,
        width: '100%'
    },
    backImgBottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    
    TitleArea: {
        marginTop: '3%',
        display: 'flex',
        alignItems: 'center',
        color: '#FFF',
    },
    TextTitulo: {
        fontSize: 20,
        color: '#161F3D',
        fontFamily: 'RajdhaniBold',
        color: '#FFF',
    },
    TextSubTitulo: {
        fontSize: 20,
        color: '#161F3D',
        fontFamily: 'RajdhaniRegular',
        marginTop: '3%',
        color: '#FFF',
    },
    FormArea: {
        marginTop: '5%',
        width: '90%',
        paddingHorizontal: '5%',
        color: '#FFF',
    },
    input: {
        borderWidth: 2,
        borderColor: '#E8E8E9',
        borderRadius: 6,
        marginVertical: 13,
        padding: 5,
        color: '#FFF',
    },
})
