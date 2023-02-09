import { View, Text, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../context/AuthContext';



export default function AppNav() {
    const { isloading, userToken } = useContext(AuthContext);

    if (isloading) {
        return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} />
        </View>
        )
    }


    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}