// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CoursesStack from './src/navigation/CoursesStack';
// se borra por no uso import StartScreen from './screens/StartScreen';
// import {DefaultTheme} from '@react-navigation/native';
import {colors} from './src/theme/index';
import { ReservationsProvider } from './src/context/ReservationsContext';
import TabNavigation from './src/navigation/TabNavigation';
import { ProfileProvider } from './src/context/ProfileContext';

const themeNavigation = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    card: colors.surface,
    primary : colors.primary,
    text: colors.text,
    border: colors.border
    }
  }    

export default function App() {
  return (
    <ProfileProvider>
      <ReservationsProvider> 
        <SafeAreaProvider>
          <NavigationContainer theme={themeNavigation}>
            <StatusBar style = "dark" />
            <TabNavigation/>
          </NavigationContainer>
        </SafeAreaProvider>
      </ReservationsProvider> 
    </ProfileProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
