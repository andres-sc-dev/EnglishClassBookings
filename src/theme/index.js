import {platform} from 'react-native';
//la app tendra un fondo de color blanco y tendra lineas rojas en sus cards 
export const colors = {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#000000',
    border: '#FF0000',
    primary: '#FF0000',
}

// espaciado de separacion de letras y componentes 
export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20
}

// radio boton 
export const radius = {
    sm: 8,
    md: 14,
    lg: 20,
    full: 999
}

// topografia de la app
export const typography = {
    title: {fontSize: 26, fontWeight: "800", color: colors.text}
}

export default {
    colors,
    spacing,
    radius,
    typography
}
