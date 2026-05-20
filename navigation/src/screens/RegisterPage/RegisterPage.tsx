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

const handleRegister = async() => {

    console.log("Tap en registro");

    const dummyUser = {
        nombre: "pepe",
        username: "pepe1",
        correo: "pepe@gmail.com",
        fechaNacimiento: "2005-10-20",
        contrasena: "123456"
    };

    await AuthService.register(dummyUser);

    navigation.navigate("Login");
};

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