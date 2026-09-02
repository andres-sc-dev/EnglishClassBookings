import React, {useState, useEffect} from 'react';
import {View, Text, Image, Pressable, StyleSheet, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LabelLevel from '../components/LabelLevel';
import {colors, spacing, radius, typography} from '../theme'
import {formatPrice, CLASSES, LEVELS} from '../data/classes';
import { TextInput } from 'react-native';
import LevelChip from '../components/LevelChip';    


export default function StartScreen({ navigation }){
    const insets = useSafeAreaInsets();
    const [level, setLevel] = useState('All Levels');
    const [search, setSearch] = useState('');

    return(
        <View style = {[style.screen, {paddingTop: insets.top + spacing.md}]}>
            <Text> aplicacion de reservas de ingles </Text>
            <View>
                <Ionicons name="search" size = {18} color = {colors.primary}/>
                <TextInput
                    value = {search}
                    onChangeText = {setSearch}
                    placeholder = "ingrese el nombre o nivel de busqueda"
                    autoCorrect = {false}
                    autoComplete = {false}
                />
                {
                    search.length > 0 && 
                        <Pressable onPress={() => setSearch('')}>    
                            <Ionicons 
                                name = "close-circle" 
                                size = {18}
                                color = {colors.primary} 
                                
                            />
                        </Pressable>
                }
            
            </View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator = {false}
                style = {{flexGrow: 0}}
            >
                {
                    LEVELS.map(item => (
                        <LevelChip 
                            key = {item}
                            active = {item}
                            label = {item}
                            onPress = {() => setLevel(item)}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.fondo },
  searcher: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    backgroundColor: colors.superficie,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    height: 46,
    marginTop: spacing.lg,
    borderWidth: 1,
    borderColor: colors.borde,
  },
  input: { flex: 1, fontSize: 14, color: colors.texto, paddingVertical: 0 },
});