import React from 'react';
import { View } from 'react-native';

//Importamos los atomos de los botones 
import Button from '../../atoms/Button';


//Funcion para darle un valor a cada boton al ser presionado 
const CalculatorButtons = ({ onPress }: { onPress: (value: string) => void }) => {
  return (
    <View>

      {/* Primera fila de botones */}
      <View style={{ flexDirection: 'row' }}>
        <Button label="1" onPress={() => onPress('1')} />
        <Button label="2" onPress={() => onPress('2')} />
        <Button label="3" onPress={() => onPress('3')} />
        <Button label="/" onPress={() => onPress('/')} />
      </View>

      {/* Segunda fila */}
      <View style={{ flexDirection: 'row' }}>
        <Button label="4" onPress={() => onPress('4')} />
        <Button label="5" onPress={() => onPress('5')} />
        <Button label="6" onPress={() => onPress('6')} />
        <Button label="*" onPress={() => onPress('*')} />
      </View>

      {/* Tercera fila */}
      <View style={{ flexDirection: 'row' }}>
        <Button label="7" onPress={() => onPress('7')} />
        <Button label="8" onPress={() => onPress('8')} />
        <Button label="9" onPress={() => onPress('9')} />
        <Button label="-" onPress={() => onPress('-')} />
      </View>

      {/* Cuarta fila */}
      <View style={{ flexDirection: 'row' }}>
        <Button label="0" onPress={() => onPress('0')} />
        <Button label="Borrar" onPress={() => onPress('Borrar')} />
        <Button label="=" onPress={() => onPress('=')} />
        <Button label="+" onPress={() => onPress('+')} />
      </View>

    </View>
  );
};

//Se exporta el componente para usarlo despues
export default CalculatorButtons;