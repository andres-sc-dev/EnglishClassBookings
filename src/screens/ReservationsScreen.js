import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet, Pressable, Alert} from 'react-native';
import {ReservationsContext} from '../context/ReservationsContext';
import EmptyState from '../components/EmptyState';
import {colors, spacing} from '../theme';

export default function ReservationsScreen() {
  const {classSeats, cancelReservation} = useContext(ReservationsContext);

  // Pide confirmación y, si el usuario acepta, cancela la reserva (esto libera el cupo y el horario)
  const handleCancel = (item) => {
    Alert.alert('Cancelar reserva', '¿Cancelar ' + item.title + ' (' + item.schedules + ')?', [
      {text: 'No', style: 'cancel'},
      {text: 'Sí, cancelar', style: 'destructive', onPress: () => cancelReservation(item.id)},
    ]);
  };
  return (
    <View style={styles.container}> 
      {classSeats.length === 0 ? (
        <EmptyState icon="list-outline" title="Sin reservas" message="No hay reservas disponibles." />   // Si no hay reservas, se muestra un estado vacío con un mensaje
      ) : (
        <FlatList
          data={classSeats}
          keyExtractor={(item) => item.id} // Se utiliza el id de la reserva como clave única
          renderItem={({item}) => (
            <View style={styles.seatItem}>
                <Text style={styles.seatText}>{item.title}</Text>
                <Text style={styles.seatText}>Horario: {item.schedules}</Text>
                <Text style={styles.seatText}>Profesor: {item.teacher}</Text>
                <Pressable style={styles.cancelButton} onPress={() => handleCancel(item)}>
                  <Text style={styles.cancelText}>Cancelar</Text>
                </Pressable>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  seatItem: {
    backgroundColor: colors.surface,
    padding: spacing.sm,
    marginVertical: spacing.sm,
    borderRadius: 8,
  },
  seatText: {
    fontSize: 16,
    color: colors.text,
  },
  cancelButton: {
    alignSelf: 'flex-end',
    marginTop: spacing.sm,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  cancelText: { color: colors.primary, fontWeight: '700' },
});
