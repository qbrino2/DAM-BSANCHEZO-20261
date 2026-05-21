import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../Routes";
import { AuthRepository, ProductRepository } from "../../core/repositories";
import { RegisterProductForm } from "../../components/organisms";

const RegisterProductPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const handleCreate = async (productData: {
    nombre: string; sku: string; stock: number;
    costoCompra: number; precioVenta: number; descripcion: string;
  }) => {
    const user = await AuthRepository.get();
    if (!user?.id) return;
    ProductRepository.create({ ...productData, userId: user.id as number });
    navigation.navigate("Dashboard");
  };

  return (
    <RegisterProductForm
      onSubmit={handleCreate}
      onBack={() => navigation.navigate("Dashboard")}
    />
  );
};

export default RegisterProductPage;