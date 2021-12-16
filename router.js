import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './src/pages/Login';
import HomeScreen from './src/pages/HomeScreen';
import Regulamento from './src/pages/regulamento';
import Premiacao from './src/pages/premiacao';
import Resultado from './src/pages/Resultado';

export default function router() {
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="Regulamento" component={Regulamento} />
                    <Stack.Screen name="Premiacao" component={Premiacao} />
                    <Stack.Screen name="Resultado" component={Resultado} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}