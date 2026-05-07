import React from "react";
import { View, Text } from "react-native";
import { Button } from "../../atoms";

interface LoginProps {
  onSubmit?: () => void;
}

const LoginForm = ({ onSubmit }: LoginProps) => {
  return (
    <View>
      <Text>Formulario Login</Text>

      <Button
        title="Iniciar Sesión"
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default LoginForm;