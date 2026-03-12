import { StyleSheet } from 'react-native';
import { colors } from './themes/colors';
import { space } from './themes/space';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: space.m,
  },
});