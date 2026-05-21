import React from "react";
import { View, Text } from "react-native";
import { Input } from "../../atoms";
import { styles } from "./InputFieldStyle";

interface InputFieldProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value?: string;                          
  onChangeText?: (text: string) => void;   
}

const InputField = ({
  label,
  placeholder,
  secureTextEntry,
  value,          
  onChangeText,   
}: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}            
        onChangeText={onChangeText} 
      />
    </View>
  );
};

export default InputField;