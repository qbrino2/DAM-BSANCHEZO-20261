import React from "react";
import { Pressable, Text } from "react-native";

// Importamos los estilos de los botones
import { styles } from "./ButtonStyle";

interface ButtonProps {
  title: string;
  disable: boolean;
  onSubmit?: () => void;
}


const Button = ({ title, disable = false, onSubmit }: ButtonProps) => {
  return (
    <Pressable
      disabled={disable}
      style={styles.container}
      onPress={onSubmit}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;