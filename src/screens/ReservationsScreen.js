import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ReservationsContext} from '../context/ReservationsContext';
import EmptyState from '../components/EmptyState';
import {colors, spacing} from '../theme';

export default function ReservationsScreen() {
  const {classSeats} = useContext(ReservationsContext);
  return (
    <View style={styles.container}> 
      {classSeats.length === 0 ? (
        <EmptyState message="No hay reservas disponibles." />   // Si no hay reservas, se muestra un estado vacío con un mensaje
      ) : (
        <FlatList
          data={classSeats}
          keyExtractor={(item) => item.id} // Se utiliza el id de la reserva como clave única
          renderItem={({item}) => (
            <View style={styles.seatItem}>
                <Text style={styles.seatText}>{item.title}</Text>
                <Text style={styles.seatText}>Horario: {item.schedules}</Text>
                <Text style={styles.seatText}>Profesor: {item.teacher}</Text>
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
});
