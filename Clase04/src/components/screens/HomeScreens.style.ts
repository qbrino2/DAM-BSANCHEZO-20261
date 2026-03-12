import { StyleSheet } from 'react-native';
import { colors } from '../../themes/colors';
import { space } from '../../themes/space';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: space.m,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: space.s,
  },
  subtitle: {
    fontSize: 18,
    color: colors.text,
    marginBottom: space.m,
  },
});