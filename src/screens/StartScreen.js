import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, Image, Pressable, StyleSheet, ScrollView, FlatList,TextInput } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import EmptyState from '../components/EmptyState';

import LabelLevel from '../components/LabelLevel';
import LevelChip from '../components/LevelChip';  
import Card from '../components/Card'; 

import useResponsive from '../hooks/useResponsive';


import {colors, spacing, radius, typography} from '../theme'
import {formatPrice, CLASSES, LEVELS} from '../data/classes';


export default function StartScreen({ navigation }){
    const insets = useSafeAreaInsets();
    const {columns, paddingHorizontal } = useResponsive();
    const [level, setLevel] = useState('All');
    const [search, setSearch] = useState('');


    const results = useMemo(() => {
        // calculo que realiza el useMemo para filtrar los resultados de la busqueda y el nivel seleccionado
        const searchText = search.trim().toLowerCase();
        return CLASSES.filter((clas) => {
            const levelMatches = level === 'All' || 
            clas.level === level;
            const textMatches = searchText ||
            searchText === ''|| //redundancia, la condicion de arriba ya cubre este caso, pero se deja por claridad
            clas.teacher.name.toLowerCase().includes(searchText) ||
            clas.title.toLowerCase().includes(searchText) 
            //aca poner mas "coincidencias" para que busque en mas campos
            return levelMatches && textMatches;
        });
    }, [level, search]); // recalcula los resultados cada vez que cambian level o search

    return (
        <View style={[style.screen, { paddingTop: insets.top + spacing.md }]}>
            {/* Encabezado: título de la app + barra de búsqueda */}
            <View style={style.header}>
                <Text style={style.headerTitle}>🇬🇧English Class Bookings🇺🇸</Text>

                <View style={style.searcher}>
                    <Ionicons name="search" size={18} color={colors.textMuted} />
                    <TextInput
                        style={style.input}
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Buscar por nombre o nivel"
                        placeholderTextColor={colors.textMuted}
                        autoCorrect={false}
                        autoComplete={false}
                    />
                    {search.length > 0 && (
                        <Pressable onPress={() => setSearch('')}>
                            <Ionicons name="close-circle" size={18} color={colors.textMuted} />
                        </Pressable>
                    )}
                </View>
            </View>

            {/* Fila de chips para filtrar por nivel */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={style.chipsRow}
                contentContainerStyle={style.chipsContent}
            >
                {LEVELS.map((item) => (
                    <LevelChip
                        key={item}
                        active={item === level}
                        label={item}
                        onPress={() => setLevel(item)}
                    />
                ))}
            </ScrollView>

            {/* Lista principal de cursos filtrados */}
            <FlatList
                data={results}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => ( // renderiza cada curso como una tarjeta, en caso de error poner ,index como prop 
                    <Card course={item}
                          onPress={() => navigation.navigate('ClassDetailScreen', {course: item})}
                    />
                )}
                contentContainerStyle={{ paddingHorizontal: spacing.lg, paddingTop: spacing.lg, flexGrow: 1 }}
                numColumns={columns}
                columnWrapperStyle={columns > 1 ? style.columnWrapper : undefined}
                ListEmptyComponent={
                    <EmptyState
                        icon="search-outline"
                        title="No se encontraron resultados"
                        message="Intenta ajustar tu búsqueda o criterios de filtro"
                        onAction={() => {
                            setLevel('All');
                            setSearch('');
                        }}
                    />
                }
            />
        </View>
    )
}

const style = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  header: { paddingHorizontal: spacing.lg, marginBottom: spacing.md },
  headerTitle: { ...typography.title, marginBottom: spacing.md },
  searcher: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46, 
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: { flex: 1, fontSize: 14, color: colors.text, paddingVertical: 0 },
  chipsRow: { flexGrow: 1, marginBottom: spacing.md, height: 46 }, //resuelto bug con height, no se veia completamente el texto cuando esta en all
  chipsContent: { paddingHorizontal: spacing.lg }, 
  columnWrapper: { gap: spacing.md }
});

//resolver bug que en all se ven los chips un poco mas pequeños y en los otros niveles si se ven del mismo tamaño