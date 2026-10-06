export const colors = {
  background: '#FAFAFA',
  surface: '#FFFFFF',

  text: '#1A1A1A',
  textMuted: '#7A7A80',
  textInverse: '#FFFFFF',

  primary: '#E11D2E',
  primarySoft: '#FCE8EA',

  border: '#ECECEE',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
};

export const radius = {
  sm: 8,
  md: 14,
  lg: 20,
  xl: 26,
  full: 999,
};

export const typography = {
  title: { fontSize: 26, fontWeight: '800', color: colors.text },
  cardTitle: { fontSize: 16, fontWeight: '700', color: colors.text },
  body: { fontSize: 14, fontWeight: '400', color: colors.text },
  caption: { fontSize: 12, fontWeight: '500', color: colors.textMuted },
  price: { fontSize: 15, fontWeight: '800', color: colors.primary },
};

// Sombra suave y multiplataforma para las tarjetas elevadas.
export const shadow = {
  card: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
};

export default {
  colors,
  spacing,
  radius,
  typography,
  shadow,
};