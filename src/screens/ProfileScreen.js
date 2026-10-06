import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image} from 'react-native';
import {ProfileContext} from '../context/ProfileContext';
import {colors, spacing} from '../theme';

export default function ProfileScreen() {
    
    const {profile, saveProfile} = useContext(ProfileContext);
    const [name, setName] = useState(profile?.name || '');
    const [email, setEmail] = useState(profile?.email || '');
    const [phone, setPhone] = useState(profile?.phone || '');
    const [photo, setPhoto] = useState(profile?.photo || null);
    return ( 
        
        <View style={styles.container}>
            
            {profile ? (
                <>
                    <Text style={styles.title}>Perfil</Text>
                    <Image source={{uri: photo}} style={styles.image} />
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        value={phone}
                        onChangeText={setPhone}
                    />
                    <Button
                        title="Guardar"
                        onPress={() => saveProfile({name, email, phone, photo})}
                    />
                </>
            ) : (
                <>
                    <Text style={styles.title}>Crear Perfil</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        value={phone}
                        onChangeText={setPhone}
                    />
                    <Button
                        title="Guardar"
                        onPress={() => {
                            console.log('Guardando...', {name, email, phone, photo});
                            saveProfile({name, email, phone, photo})}
                        }
                    />
                </>
            )}
        </View>
    );
    };

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        padding: spacing.md,
        backgroundColor: colors.background,
    },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: spacing.md,
        },
        input: {
            height: 40,
            borderColor: colors.border,
            borderWidth: 1,
            marginBottom: spacing.md,
            paddingHorizontal: spacing.sm,
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: spacing.md,
        },
    });