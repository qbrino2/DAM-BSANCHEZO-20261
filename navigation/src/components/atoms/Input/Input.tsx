import React from "react";
import { TextInput } from "react-native";
import { styles } from "./InputStyle";

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;                         // ← agregar
  onChangeText?: (text: string) => void;  // ← agregar
}

const Input = ({
  placeholder,
  secureTextEntry,
  value,          // ← agregar
  onChangeText,   // ← agregar
}: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#ef7f00"
      secureTextEntry={secureTextEntry}
      value={value}                // ← agregar
      onChangeText={onChangeText}  // ← agregar
    />
  );
};

export default Input;