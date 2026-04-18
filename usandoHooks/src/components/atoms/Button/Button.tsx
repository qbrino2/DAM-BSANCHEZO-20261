import React from 'react';
import { Pressable, Text } from 'react-native';

//Importamos los estilos de los botones
import styles from './Button.style';

//El componente va recibir tanto el texto como una funcion que se ejecuta cuando se oprime
const Button = ({ label, onPress }: { label: string; onPress: () => void }) => {
  return (

    //Usamos el pressable para que detecte cuando se presiona el boton
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

// Lo exportamos para usarlo despues
export default Button;