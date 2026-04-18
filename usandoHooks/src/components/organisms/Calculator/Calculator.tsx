import React, { useState, useEffect} from 'react';
import { View } from 'react-native';

// Importamos los componentes de la calculadora
import CalculatorDisplay from '../../molecules/CalculatorDisplay';
import CalculatorButtons from '../../molecules/CalculatorButtons';


// Importamos los estilos
import styles from './Calculator.style';


// Componente principal de la calculadora
const Calculator = () => {

  // Hook para guardar el valor de la calculadora
  const [value, setValue] = useState('');

  // Hook para controlar efectos cuando cambia el valor
  useEffect(() => {
    console.log('El valor cambió:', value);
  }, [value]);

  //Funcion que se va ejecutrar cuando se presiona algun boton
  const handlePress = (input: string) => {

    //Si presiona el boton de borrar se limpia la pantalla
    if (input === 'Borrar') {
      setValue('');
    } 

    // Si presiona el = calcula el resultado
    else if (input === '=') {
      setValue(eval(value).toString());
    } 

    //Si es un numero o un operador lo va agregar al valor que se tiene
    else {
      setValue(value + input);
    }

  };

  return (
    // Contenedor principal de la calculadora
    <View style={styles.container}>

      {/* Componente que muestra el valor o el resultado*/}
      <CalculatorDisplay value={value} />
      
      {/* Componente que contiene todos los botones de la calculadora*/}
      <CalculatorButtons onPress={handlePress} />
    </View>
  );
};
export default Calculator;