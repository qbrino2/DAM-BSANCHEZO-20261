import React from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AuthStackParamList } from "../../Routes";
import AuthService from "../../core/services/AuthService/AuthService";

const RegisterPage = () => {

  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

const handleRegister = async (data: {
  nombre: string;
  username: string;
  correo: string;
  fechaNacimiento: string;
  contrasena: string;
}) => {
  try {
    await AuthService.register(data);      
    navigation.navigate("Login");
  } catch (error) {
    console.error("Error al registrar:", error);
  }
};

// En el JSX:
<RegisterForm onSubmit={handleRegister} disableAction={false} />

  return (
    <AuthTemplate
      title="Register"
      subtitle="Create a new account"
    >
      <RegisterForm onSubmit={handleRegister} disableAction={false} />
    </AuthTemplate>
  );
};

export default RegisterPage;