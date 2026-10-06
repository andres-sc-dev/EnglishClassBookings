import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LabelLevel from "../components/LabelLevel";
import { colors, spacing, typography, radius, shadow } from "../theme";
import { formatPrice } from "../data/classes";
import { useReservations } from '../context/ReservationsContext';

// Pantalla de detalle de un curso. Recibe el curso completo por route.params.course
// (ya viene resuelto desde StartScreen, no hay que volver a buscarlo).
export default function ClassDetailScreen({ route, navigation }) {
  const insets = useSafeAreaInsets();
  const { course } = route.params;

  const { classSeats, reserveClass } = useReservations();
  const seatsLeft = classSeats[course.id];

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Portada: imagen del curso + insignia de nivel superpuesta */}
        <View style={styles.coverWrapper}>
          <Image source={{ uri: course.image }} resizeMode="cover" style={styles.cover} />
          <View style={styles.badge}>
            <LabelLevel level={course.level} />
          </View>
        </View>

        <View style={styles.content}>
          {/* Título del curso */}
          <Text style={styles.title}>{course.title}</Text>

          {/*
            TODO (tutoría): este bloque del profesor está con datos de ejemplo (placeholder).
            Hay que reemplazarlo por course.teacher.name y course.teacher.photo.
            Es un dato ANIDADO (un objeto "teacher" dentro del objeto "course"),
            por eso lo dejamos pendiente para verlo juntos paso a paso.
          */}
          <View style={styles.teacher}>
            <Image source={{ uri: course.teacher.photo }} style={styles.photo} />
            <View>
              <Text style={styles.teacherName}>{course.teacher.name}</Text>
              <Text style={styles.teacherCountry}>{course.teacher.country}</Text>
            </View>
          </View>

          {/* Descripción del curso */}
          <Text style={styles.description}>{course.description}</Text>

          {/*
            Tarjeta de información: agrupa precio, modalidad, duración, cupos y horarios
            en un solo bloque visual, con las filas apiladas en columna (una debajo de otra).
          */}
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Ionicons name="cash-outline" size={20} color={colors.primary} />
              <Text style={styles.infoLabel}>Precio</Text>
              <Text style={styles.infoValue}>{formatPrice(course.price)}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="business-outline" size={20} color={colors.primary} />
              <Text style={styles.infoLabel}>Modalidad</Text>
              <Text style={styles.infoValue}>{course.modality}</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="time-outline" size={20} color={colors.primary} />
              <Text style={styles.infoLabel}>Duración</Text>
              <Text style={styles.infoValue}>{course.duration} min</Text>
            </View>

            <View style={styles.infoRow}>
              <Ionicons name="people-outline" size={20} color={colors.primary} />
              <Text style={styles.infoLabel}>Cupos</Text>
              <Text style={styles.infoValue}>{seatsLeft} disponibles</Text>
            </View>

            {/* Horarios: se muestra en columna porque el texto puede ser largo y no cabe en una sola fila */}
            <View style={[styles.infoRow, styles.infoRowLast, styles.infoRowSchedules]}>
              <View style={styles.infoRowHeader}>
                <Ionicons name="calendar-outline" size={20} color={colors.primary} />
                <Text style={styles.infoLabel}>Horarios</Text>
              </View>
              <Text style={styles.scheduleValue}>{course.schedules.join(", ")}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Barra inferior fija: precio + botón de reservar (sin lógica todavía) */}
      <View style={[styles.bar, { paddingBottom: insets.bottom + spacing.md }]}>
        <View>
          <Text style={styles.barLabel}>Precio</Text>
          <Text style={styles.price}>{formatPrice(course.price)}</Text>
        </View>

        
          <Pressable
              style={[styles.reserveButton, seatsLeft === 0 && { opacity: 0.5 }]}
              disabled={seatsLeft === 0}
              onPress={() => reserveClass(course.id)}>
              <Text style={styles.reserveButtonText}>
                  {seatsLeft === 0 ? 'Sin cupos' : 'Reservar clase'}
              </Text>
          </Pressable>
        
        {/*<Pressable style={styles.reserveButton} onPress={() => {}}>
          <Text style={styles.reserveButtonText}>Reservar clase</Text>
        </Pressable>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  scrollContent: { paddingBottom: 120 },

  coverWrapper: { width: "100%" },
  cover: { width: "100%", height: 240, backgroundColor: colors.primarySoft },
  badge: { position: "absolute", top: spacing.lg, left: spacing.lg },

  content: { padding: spacing.lg, gap: spacing.lg },

  title: { ...typography.title, fontSize: 22 },

  teacher: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    ...shadow.card,
  },
  photo: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.border },
  teacherName: { fontSize: 15, fontWeight: "700", color: colors.text },
  teacherCountry: { ...typography.caption, marginTop: 2 },

  description: { ...typography.body, color: colors.textMuted, lineHeight: 22 },

  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    ...shadow.card,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoRowLast: { borderBottomWidth: 0 },
  infoLabel: { ...typography.body, flex: 1, color: colors.text },
  infoValue: { ...typography.body, fontWeight: "700", color: colors.text },
  infoRowSchedules: { flexDirection: "column", alignItems: "flex-start", gap: spacing.xs },
  infoRowHeader: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  scheduleValue: { ...typography.body, color: colors.text, fontWeight: "700", lineHeight: 20 },

  bar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  barLabel: { ...typography.caption },
  price: { fontSize: 20, fontWeight: "800", color: colors.primary },

  reserveButton: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.full,
  },
  reserveButtonText: { color: colors.textInverse, fontWeight: "700", fontSize: 15 },
});