import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Screens from './screens';
import { ThemeProvider } from "@emotion/react";
import { NavigationContainer } from "@react-navigation/native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"

const theme = {
    primary: '#FBC94C',
    secondary: '#363636',
    background: '#FFF',
    color: '#000',
    error: '#f91616',
    warning: '#fda400',
    success: '#19ca01'
}

const Main = () => {
    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <StatusBar backgroundColor={theme.primary} />
                <NavigationContainer>
                    <Screens />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    )
}

export default Main
