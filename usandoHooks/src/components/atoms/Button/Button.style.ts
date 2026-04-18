import { StyleSheet } from 'react-native';

//Importammos el colores y espacios 
import { colors, spacing, sizes } from '../../../themes';

export default StyleSheet.create({

  // Colocamos estilo al boton
  button: {
    flex: 1,
    margin: spacing.xs,
    padding: spacing.md,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },

  // Estilo a el texto
  text: {
    color: colors.black,
    fontSize: sizes.lg,
  },
});