import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';

const Stack = createNativeStackNavigator();

export default function CoursesStack() {
    return ( 
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component={StartScreen}
                options = {{HeaderShown: false, title: 'Home'}}
            />
        </Stack.Navigator>
    )

}