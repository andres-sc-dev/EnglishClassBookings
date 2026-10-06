import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import ClassDetailScreen from '../screens/ClassDetailScreen';


const Stack = createNativeStackNavigator();

export default function CoursesStack() {
    return ( 
        <Stack.Navigator>
            <Stack.Screen
                name = "Home"
                component={StartScreen}
                options = {{headerShown: false, title: 'Home'}} //eliminar title en dado caso
            />

            <Stack.Screen
                name = "ClassDetailScreen"
                component={ClassDetailScreen}
                options = {{title: 'Class Detail', headerBackTitle: 'Back'}}
            />
        </Stack.Navigator>
    )

}