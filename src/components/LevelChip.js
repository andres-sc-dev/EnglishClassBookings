// src/components/LevelChip.js
import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, typography } from '../theme';

// Chip de filtro por nivel (All, Basic, Intermediate, etc.).
// Diseño: pastilla suave (rosado clarito) cuando está inactivo,
// y rojo sólido + icono de check cuando está seleccionado.
export default function LevelChip({ label, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.chip,
        active && styles.chipActive,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.content}>
        {active && (
          <Ionicons
            name="checkmark-circle"
            size={14}
            color={colors.textInverse}
            style={styles.icon}
          />
        )}
        <Text style={[styles.text, active && styles.activeText]}>{label}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    backgroundColor: colors.primarySoft,
    marginRight: spacing.sm,
  },
  chipActive: {
    backgroundColor: colors.primary,
  },
  pressed: { opacity: 0.75 },
  content: { flexDirection: 'row', alignItems: 'center' },
  icon: { marginRight: 4 },
  text: {
    ...typography.caption,
    color: colors.primary,
    fontWeight: '700',
  },
  activeText: { color: colors.textInverse },
});