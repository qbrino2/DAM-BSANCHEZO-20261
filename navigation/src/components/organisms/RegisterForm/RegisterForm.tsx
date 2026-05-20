import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../atoms";

import { styles } from "./RegisterFormStyles"; 

// Importamos molecules
import {
  InputField,
} from "../../moleculas";

interface RegisterFormProps {
  onSubmit: () => void;
  disableAction:boolean,
}

const RegisterForm = (
  { onSubmit }: RegisterFormProps
) => {
  return (
    <View>

       {/* Campo nombre completo */}
      <InputField
        label="FULL NAME"
        placeholder="Enter your full name"
      />

       {/* Campo username */}
      <InputField
        label="USERNAME"
        placeholder="Enter your username"
      />

      {/* Campo email */}
      <InputField
        label="EMAIL"
        placeholder="Enter your email"
      />

      {/* Campo de fecha de naciemiento */}
      <InputField
        label="DATE OF BIRTH"
        placeholder="YYYY-MM-DD"
      />

       {/* Campo de contraseña */}
      <InputField
        label="PASSSWORD"
        placeholder="Enter your password"
        secureTextEntry
      />

      {/* Campo de confirmar contraseña */}
      <InputField
        label="CONFIRM PASSWORD"
        placeholder="Confirm your password"
        secureTextEntry
      />

      {/* Boton de crear la cuenta */}
      <Button
        title="CREATE ACCOUNT"
        onSubmit={onSubmit}
        disable={false}
      />
    </View>
  );
};

export default RegisterForm;