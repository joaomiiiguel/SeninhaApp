import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './src/pages/Login';
import HomeScreen from './src/pages/HomeScreen';

export default function router() {
    return (
        <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}