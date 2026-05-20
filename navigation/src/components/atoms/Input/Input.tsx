import React from "react";
import { TextInput } from "react-native";

// importamos el estilo del input
import { styles } from "./InputStyle";

// poner las propiedades que va recibir el componente
interface InputProps {

  // 1) el texto que se pone en el imput
  placeholder: string;

  // 2) si el input va olcultar el texto que solo se habilitara para el espacio de las contraseñas
  secureTextEntry?: boolean;
}


// Componente Input reutilizable
const Input = ({
  placeholder,
  secureTextEntry,
}: InputProps) => {
  return (

    // campo de texto 
    <TextInput
      style={styles.input}
      placeholder={placeholder}


      // PREGUNTAR COMO CAMBIAR ESTOOOOOOOOO
      placeholderTextColor="#ef7f00"

      // oculta el texto si es contraseña
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;