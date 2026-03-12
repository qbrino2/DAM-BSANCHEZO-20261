import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { styles } from './HomeScreens.style';
import { colors } from '../../themes/colors';

export const HomeScreens = () => {
  const handlePress = () => {
    Alert.alert('¡Hola desde React Native! 🚀');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola Mundo! 🌎</Text>
      <Text style={styles.subtitle}>Bienvenido a tu app con temas y estilos</Text>
      <Button title="Presióname" color={colors.primary} onPress={handlePress} />
    </View>
  );
};