import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors, spacing, radius} from '../theme';
import {Ionicons} from '@expo/vector-icons';

export default function EmptyState({icon = 'calendar-outline', title, message, actionLabel, onAction}) {
    return(
    <View style = {style.container}>
        <View style = {style.circle}>
            <Ionicons name = {icon} size = {34} color = {colors.primary}/>
        </View>
        <Text style = {style.title}>{title}</Text>
        <Text style = {style.message}>{message}</Text>
        {/* el boton solo aparece si se pasa la prop onAction */}
        {onAction && (
          <Pressable style = {style.button} onPress = {onAction}>
            <Text style = {style.buttonText}>{actionLabel}</Text>
          </Pressable>
        )}
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
  button: {
    marginTop: spacing.lg,
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
  },
  buttonText: { 
    color: colors.textInverse,
    fontWeight: '700',
    fontSize: 14 },
  });