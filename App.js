import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CoursesStack from './src/navigation/CoursesStack';
// se borra por no uso import StartScreen from './screens/StartScreen';
// import {DefaultTheme} from '@react-navigation/native';
import {colors} from './src/theme/index';

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
    <SafeAreaProvider>
      <NavigationContainer theme={themeNavigation}>
        <StatusBar style = "dark" />
        <CoursesStack/>
      </NavigationContainer>
    </SafeAreaProvider>
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
