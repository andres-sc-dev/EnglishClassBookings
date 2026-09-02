import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import LabelLevel from './LabelLevel';
import {colors, spacing, radius, typography} from '../theme'
import {formatPrice} from '../data/classes';


export default function Card({course, onPress}) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Image source={{uri: course.image}} style={styles.image} />
        <View style={styles.content}>
            <LabelLevel level={course.level} />
            <Text style={styles.title}>{course.title}</Text>
            <Text> {CLASSES.price}</Text>
            <Text> {CLASSES.teacher.name}</Text>
            <Text> {formatPrice(CLASSES.price)}</Text>
          

        </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  title: {fontzise: 16, color: colors.text}
})