import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native'
import { theme } from '../globalstyles'

import { useFonts } from 'expo-font';
import Header from '../components/Header';


export default function regulamento({ navigation }) {
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
            <Header nameHeader={'Regulamento'} onPressGoBack={() => navigation.goBack()} />
            <View>
                <Text style={styles.titleRegul}>Regulamento das Apostas</Text>
                <Text style={styles.textRegul}>
                    ∙ Os sorteios serão realizados pela Caixa Econômica Federal aos sábados às 20H. A cada sábado serão sorteadas 06 (Seis) dezenas; {`\n`}
                    ∙ O participante que marcar primeiro os 10 (dez) pontos será o ganhador do prêmio de Maior Ponto;{`\n`}
                    ∙ O participante que marcar menos pontos será o ganhador do prêmio de Menor Ponto;{`\n`}
                    ∙ Cada participante deverá escolher 10 (Dez) números entre 01 (Um) e 60 (Sessenta); {`\n`}
                    ∙ Caso tenha mais de 01 (Um) ganhador, o prêmio será dividido.
                </Text>
                <Text style={styles.subtitleRegul}>IMPORTANTE</Text>
                <Text style={styles.textRegul}>
                ∙ Só terá direito ao prêmio o ganhador que tiver efetuado o pagamento até o sábado; {`\n`}
                ∙ O organizador terá até 15 dias após o último sorteio para realizar o pagamento.
                </Text>

                <Text style={styles.subtitleRegul}>DIVISÃO DO VALOR ARRECADADO</Text>
                <Text style={styles.textRegul}>80% para quem Marcar 10 Pontos</Text>
                <Text style={styles.textRegul}>10% para quem marcar menos Pontos</Text>
                <Text style={styles.textRegul}>10% para a organização do bolão</Text>


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
