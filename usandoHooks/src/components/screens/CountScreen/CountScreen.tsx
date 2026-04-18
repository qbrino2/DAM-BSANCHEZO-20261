import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importamos el componente principal de la calculadora
import Calculator from '../../organisms/Calculator';


// Componente de pantalla donde se mostrara la calculadora
const CountScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Renderiza el componente de la calculadora */}
      <Calculator />
    </SafeAreaView>
  );
};

export default CountScreen;