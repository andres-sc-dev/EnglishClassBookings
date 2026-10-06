import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Image, Pressable, Alert} from 'react-native';
import {ProfileContext} from '../context/ProfileContext';
import {colors, spacing} from '../theme';

// Fotos disponibles para elegir (sin instalar librerías). La elegida se guarda en AsyncStorage con el perfil
const AVATARS = [
    'https://i.pravatar.cc/200?img=5',
    'https://i.pravatar.cc/200?img=15',
    'https://i.pravatar.cc/200?img=33',
    'https://i.pravatar.cc/200?img=47',
    'https://i.pravatar.cc/200?img=60',
];

export default function ProfileScreen() {
    
    const {profile, saveProfile} = useContext(ProfileContext);
    const [name, setName] = useState(profile?.name || '');
    const [email, setEmail] = useState(profile?.email || '');
    const [phone, setPhone] = useState(profile?.phone || '');
    const [photo, setPhoto] = useState(profile?.photo || null);
    useEffect(() => {
        if (profile) {
            setName(profile.name);
            setEmail(profile.email);
            setPhone(profile.phone);
            setPhoto(profile.photo);
        }
    }, [profile]);

        // Valida los datos y guarda. Se usa en los dos botones (crear y guardar cambios)
    const handleSave = () => {
        if (!name.trim() || !email.trim() || !phone.trim()) {
            Alert.alert('Faltan datos', 'Completa nombre, correo y teléfono.');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
            Alert.alert('Correo inválido', 'Escribe un correo válido.');
            return;
        }
        if (!/^\d{7,15}$/.test(phone.trim())) {
            Alert.alert('Teléfono inválido', 'Escribe solo números (7 a 15 dígitos).');
            return;
        }
        if (!photo) {
            Alert.alert('Falta la foto', 'Elige una foto para tu perfil.');
            return;
        }
        console.log('Guardando...', {name, email, phone, photo});
        saveProfile({name: name.trim(), email: email.trim(), phone: phone.trim(), photo});
        Alert.alert('Listo', 'Perfil guardado.');
    };


    return ( 
        
        <View style={styles.container}>
            
            {profile ? (
                <>
                    <Text style={styles.title}>Perfil</Text>
                    {/* la foto no se puede cambiar después de crear el perfil */}
                    <Image source={{uri: photo}} style={styles.image} />
                    <TextInput
                       
                        style={[styles.input, styles.inputDisabled]}
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
                        onPress={handleSave}
                    />
                </>
            ) : (
                <>
                    <Text style={styles.title}>Crear Perfil</Text>
                     <Text style={styles.label}>Elige tu foto</Text>
                    <View style={styles.avatars}>
                        {AVATARS.map((uri) => (
                            <Pressable key={uri} onPress={() => setPhoto(uri)}>
                                <Image
                                    source={{uri}}
                                    style={[styles.avatar, photo === uri && styles.avatarActive]}
                                />
                            </Pressable>
                        ))}
                    </View>
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
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad" 
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
                label: {
            fontSize: 14,
            color: colors.textMuted,
            marginBottom: spacing.sm,
        },
        avatars: {
            flexDirection: 'row',
            gap: spacing.sm,
            marginBottom: spacing.md,
        },
        avatar: {
            width: 56,
            height: 56,
            borderRadius: 28,
            borderWidth: 3,
            borderColor: 'transparent',
        },
        avatarActive: {
            borderColor: colors.primary,
        },
        inputDisabled: {
            backgroundColor: colors.border,
            color: colors.textMuted,
        },
    });