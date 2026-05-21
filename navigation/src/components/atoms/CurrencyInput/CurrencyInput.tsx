// atoms/CurrencyInput/CurrencyInput.tsx
import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { styles } from "./CurrencyInputStyles";

interface CurrencyInputProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
}

const CurrencyInput = ({ value, onChangeText, placeholder }: CurrencyInputProps) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder ?? "0.00"}
      placeholderTextColor="#ef7f00"
      keyboardType="decimal-pad"
    />
  );
};



export default CurrencyInput;