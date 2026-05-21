import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStackParamList, AppStackParamList } from "./Routes";
import { LoginPage, RegisterPage, DashboardPage, RegisterProductPage } from "./screens";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<AppStackParamList>();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Dashboard">
              {() => <DashboardPage onLogout={() => setIsLoggedIn(false)} />}
            </AppStack.Screen>
            <AppStack.Screen name="RegisterProduct" component={RegisterProductPage} />
          </AppStack.Navigator>
        ) : (
          <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#fff" } }}>
            <AuthStack.Screen name="Login">
              {() => <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />}
            </AuthStack.Screen>
            <AuthStack.Screen name="Register" component={RegisterPage} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;