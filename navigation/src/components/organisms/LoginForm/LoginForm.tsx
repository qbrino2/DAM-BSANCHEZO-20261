
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// importamos atoms
import { Button } from "../../atoms";

import { styles } from "./LoginFormStyles"; 

// importamos molecules
import {
  InputField,
} from "../../moleculas";

interface LoginProps {
  onSubmit?: (data: { username: string; contrasena: string }) => void;
  onNavigateRegister?: () => void;
}

const LoginForm = ({ onSubmit, onNavigateRegister }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [contrasena, setContrasena] = useState("");

  return (
    <View>
      <InputField label="Username" placeholder="Enter your username"
        value={username} onChangeText={setUsername} />
      <InputField label="Password" placeholder="Enter your password"
        secureTextEntry value={contrasena} onChangeText={setContrasena} />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>
      <Button disable={false} title="LOGIN"
        onSubmit={() => onSubmit?.({ username, contrasena })} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={onNavigateRegister}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;