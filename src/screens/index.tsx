import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './login'
import MainScreen from './Main'

const Screens = () => {
    const Stack = createNativeStackNavigator<RootStackParams>()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
    )
}

export default Screens

const styles = StyleSheet.create({})