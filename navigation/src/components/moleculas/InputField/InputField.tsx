import React from "react";

import { View, Text } from "react-native";

// importamos el atom el input del atomo
import { Input } from "../../atoms";

// importamos estilos
import { styles } from "./InputFieldStyle";

// poner las propiedades que va recibir el componente
interface InputFieldProps {

  // texto del label
  label: string;

  // placeholder del input
  placeholder: string;

  // miramos si queremos ocultar un texto especifico osea la contraseña
  secureTextEntry?: boolean;
}

// contruimos la mulecula 
const InputField = ({
  label,
  placeholder,
  secureTextEntry,
}: InputFieldProps) => {

  return (

    //Ponemos los estilos
    <View style={styles.container}>

      {/* Label */}
      <Text style={styles.label}>
        {label}
      </Text>

      {/* Input reutilizable */}
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />

    </View>
  );
};

export default InputField;