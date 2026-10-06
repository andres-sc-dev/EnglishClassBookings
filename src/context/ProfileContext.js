import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => { 
  const [profile, setProfile] = useState(null);
  useEffect(() => { 
    
    const loadProfile = async () => { //
        try {
            //linea de reinicio await AsyncStorage.removeItem('profile');
            const savedProfile = await AsyncStorage.getItem('profile');
            if (savedProfile) {
                setProfile(JSON.parse(savedProfile)); 
            }
        } catch (error) {
            console.log('Error loading profile: ', error); 
        }
    };
    loadProfile();
  }, []);

  const saveProfile = async (newProfile) => {
    setProfile(newProfile);
    await AsyncStorage.setItem('profile', JSON.stringify(newProfile));
  };

  return (
    <ProfileContext.Provider value={{ profile, saveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

  
  export const useProfile = () => {
    const context = React.useContext(ProfileContext);
    if (!context) { //si no hay contexto, significa que no estamos dentro del provider. todo comentario debe de estar en español
        throw new Error('useProfile debe ser usado dentro de un ProfileProvider');
    }
    return context;
  }
