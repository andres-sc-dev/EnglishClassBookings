// src/components/LabelLevel.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

// Insignia de nivel: se muestra sobre la imagen de cada curso (ej. "Basic", "Advanced").
export default function LabelLevel({ level }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    backgroundColor: colors.surface,
    paddingVertical: 5,
    paddingHorizontal: spacing.md,
    borderRadius: radius.full, // totalmente redondeado, estilo "pill"
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '700',
  },
});