//src/components/EmptyState.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ionicons} from '@expo/vector-icons';
import {colors, spacing} from '../theme';
import {Ionicons} from '@expo/vector-icons';

export default function EmptyState({icon = 'calendar-outline', title, message, onAction}) {
    return(
    <View style = {style.container}>
        <View style = {style.circle}>
            <Ionicons name = "icon" size = {34} color = {colors.primary}/>
        </View>
        <Text style = {style.title}>{title}</Text>
        <Text style = {style.message}>{message}</Text>
    </View>



    )}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  circle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primarySoft, // antes era rojo sólido, se cambia a un tono suave
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 17,
    fontWeight: '700', // antes decía "frontWeight" (typo), no se aplicaba
    color: colors.text,
    textAlign: 'center',
  },
  message: {
    fontSize: 14,
    color: colors.textMuted, // antes usaba colors.text, se cambia para diferenciar jerarquía visual
    textAlign: 'center',
    marginTop: spacing.sm,
    lineHeight: 20,
  },
});