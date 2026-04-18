import React from 'react';
import { View, Text } from 'react-native';

//Importamos los estilos de donde vamos a mostrar los resultados
import styles from './CalculatorDisplay.style';

// Componente que recibira el resultado
const CalculatorDisplay = ({ value }: { value: string }) => {
  return (

    // Contenedor principal de la pantalla de la calculadora
    <View style={styles.container}>

      {/* Muestra el valor que recibe el componente y si no hay valor va mostrar el 0 */}
      <Text style={styles.text}>{value || '0'}</Text>

    </View>
  );
};

// Exportamos el componente para usarlo
export default CalculatorDisplay;