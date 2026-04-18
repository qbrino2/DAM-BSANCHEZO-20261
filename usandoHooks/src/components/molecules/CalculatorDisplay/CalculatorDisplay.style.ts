import { StyleSheet } from 'react-native';

// Importamos los themes 
import { colors, spacing, sizes } from '../../../themes';

export default StyleSheet.create({

  // Estilos del contendor donde se muestra el resultado
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
    alignItems: 'flex-end',
  },

  //Estilo del resultado
  text: {
    color: colors.black,
    fontSize: sizes.xxl,
  },
});