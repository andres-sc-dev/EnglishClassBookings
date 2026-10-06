import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import LabelLevel from './LabelLevel';
import { colors, spacing, radius, typography, shadow } from '../theme';
import { formatPrice } from '../data/classes';
import { CLASSES } from '../data/classes';

// Tarjeta de curso mostrada en la lista principal.
export default function Card({ course, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={styles.imageWrapper}>
        <Image source={{ uri: course.image }} style={styles.image} />
        <View style={styles.badge}>
          <LabelLevel level={course.level} />
        </View>
      </View>


      
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {course.title}
        </Text>
        
        <Text>Modality: {course.modality}</Text>
        <Text>Teacher: {course.teacher.name}</Text>
        <Text>Price: {formatPrice(course.price)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    marginBottom: spacing.lg,
    borderLeftWidth: 3,
    borderLeftColor: colors.primary, // la "línea roja" en la card, como línea de acento lateral
    ...shadow.card,
  },
  pressed: { opacity: 0.85 },
  imageWrapper: { width: '100%', aspectRatio: 16 / 9 },
  image: { width: '100%', height: '100%' },
  badge: { position: 'absolute', top: spacing.sm, left: spacing.sm },
  content: { padding: spacing.lg, gap: spacing.xs },
  title: { ...typography.cardTitle },
});