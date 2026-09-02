import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import {colors, spacing, radius} from "../theme";

export default function LevelChip ({label, active, onPress}){
    return(
        <Pressable
            onPress = {onPress}
            
            style = {({pressed}) => [
                styles.chip,
                active && styles.chipActive,
                pressed && {opacity: 0.7}]}>
                
        
            <Text style = {[styles.text, active && styles.activeText]}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    chip: {
        paddingVertical: 3, 
        paddingHorizontal: spacing.md,
        borderWidth: 1,
        borderColor: colors.border},
    chipActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary},
    text: {
        fontSize: 11,
        fontWeight: '700',
        letterSpacing: 0.3,
        color: colors.text},

    activeText: {
        color: colors.surface
    }
})