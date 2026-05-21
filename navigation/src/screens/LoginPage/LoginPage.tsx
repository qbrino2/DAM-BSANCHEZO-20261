import React from "react";
import { UserRepository, AuthRepository } from "../../core/repositories";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../Routes";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage = ({ onLoginSuccess }: LoginPageProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  const handleLogin = async (data: { username: string; contrasena: string }) => {
    try {
      const user = UserRepository.findByUsername(data.username);
      if (!user || user.contrasena !== data.contrasena) {
        console.error("Credenciales incorrectas");
        return;
      }
      await AuthRepository.save(user);
      onLoginSuccess(); 
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <AuthTemplate title="Login" subtitle="Welcome back">
      <LoginForm
        onSubmit={handleLogin}
        onNavigateRegister={() => navigation.navigate("Register")}
      />
    </AuthTemplate>
  );
};

export default LoginPage;