import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "../../atoms";
import { styles } from "./RegisterFormStyles";
import { InputField } from "../../moleculas";

interface RegisterFormProps {
  onSubmit: (data: {
    nombre: string;
    username: string;
    correo: string;
    fechaNacimiento: string;
    contrasena: string;
  }) => void;
  disableAction: boolean;
}

const RegisterForm = ({ onSubmit, disableAction }: RegisterFormProps) => {
  const [nombre, setNombre] = useState("");
  const [username, setUsername] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const handleSubmit = () => {
    if (contrasena !== confirmar) {
      console.error("Las contraseñas no coinciden");
      return;
    }
    onSubmit({ nombre, username, correo, fechaNacimiento, contrasena });
  };

  return (
    <View>
      <InputField label="FULL NAME" placeholder="Enter your full name"
        value={nombre} onChangeText={setNombre} />
      <InputField label="USERNAME" placeholder="Enter your username"
        value={username} onChangeText={setUsername} />
      <InputField label="EMAIL" placeholder="Enter your email"
        value={correo} onChangeText={setCorreo} />
      <InputField label="DATE OF BIRTH" placeholder="YYYY-MM-DD"
        value={fechaNacimiento} onChangeText={setFechaNacimiento} />
      <InputField label="PASSWORD" placeholder="Enter your password"
        secureTextEntry value={contrasena} onChangeText={setContrasena} />
      <InputField label="CONFIRM PASSWORD" placeholder="Confirm your password"
        secureTextEntry value={confirmar} onChangeText={setConfirmar} />
      <Button title="CREATE ACCOUNT" onSubmit={handleSubmit} disable={disableAction} />
    </View>
  );
};

export default RegisterForm;