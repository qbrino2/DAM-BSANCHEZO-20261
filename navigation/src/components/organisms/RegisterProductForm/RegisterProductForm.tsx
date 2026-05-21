// components/organisms/RegisterProductForm/RegisterProductForm.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./RegisterProductFormStyles";
import { InputField } from "../../moleculas";
import { PriceRow } from "../../moleculas";
import { Button } from "../../atoms";

interface RegisterProductFormProps {
  onSubmit: (product: {
    nombre: string; sku: string; stock: number;
    costoCompra: number; precioVenta: number; descripcion: string;
  }) => void | Promise<void>;
  onBack: () => void;
}

const RegisterProductForm = ({ onSubmit, onBack }: RegisterProductFormProps) => {
  const [nombre, setNombre] = useState("");
  const [sku, setSku] = useState("");
  const [stock, setStock] = useState("");
  const [costoCompra, setCostoCompra] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = () => {
    onSubmit({
      nombre, sku,
      stock: parseInt(stock) || 0,
      costoCompra: parseFloat(costoCompra) || 0,
      precioVenta: parseFloat(precioVenta) || 0,
      descripcion
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>REGISTER{"\n"}PRODUCT</Text>
      <Text style={styles.subtitle}>Create a new product listing</Text>
      <InputField label="PRODUCT NAME" placeholder="Enter product name" value={nombre} onChangeText={setNombre} />
      <InputField label="SKU / CODE" placeholder="Enter SKU" value={sku} onChangeText={setSku} />
      <InputField label="STOCK QUANTITY" placeholder="Enter quantity" value={stock} onChangeText={setStock} />
      <PriceRow
        costoCompra={costoCompra} precioVenta={precioVenta}
        onCostoChange={setCostoCompra} onPrecioChange={setPrecioVenta}
      />
      <InputField label="DESCRIPTION" placeholder="Enter description" value={descripcion} onChangeText={setDescripcion} />
      <Button title="CREATE PRODUCT" onSubmit={handleSubmit} disable={false} />
      <TouchableOpacity onPress={onBack} style={styles.backBtn}>
        <Text style={styles.backText}>← Back to Catalog</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};


export default RegisterProductForm;