import React, { useState, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../Routes";
import { AuthRepository, ProductRepository } from "../../core/repositories";
import type { Product } from "../../core/entities";
import { styles } from "./DashboardPageStyles";
import { colors } from "../../themes";

interface DashboardPageProps { onLogout: () => void; }

const DashboardPage = ({ onLogout }: DashboardPageProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const [products, setProducts] = useState<Product[]>([]);
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(p =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.sku.toLowerCase().includes(search.toLowerCase())
  );

  useFocusEffect(useCallback(() => {
    AuthRepository.get().then(user => {
      if (!user) return;
      setUsername(user.nombre as string);
      setProducts(ProductRepository.findByUser(user.id as number));
    });
  }, []));

  const handleLogout = () => {
    AuthRepository.delete();
    onLogout();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.newProductBtn}
        onPress={() => navigation.navigate("RegisterProduct")}>
        <Text style={styles.newProductText}>+ NEW PRODUCT</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        placeholderTextColor={colors.gray400}
        value={search}
        onChangeText={setSearch}
      />
      <Text style={styles.sectionTitle}>RECENT PRODUCTS</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <View>
              <Text style={styles.productName}>{item.nombre}</Text>
              <Text style={styles.productInfo}>SKU {item.sku}</Text>
              <Text style={styles.productInfo}>Stock: {item.stock}</Text>
              <Text style={styles.productInfo}>
                Profit: ${(item.precioVenta - item.costoCompra).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity style={styles.sellBtn}>
              <Text style={styles.sellText}>SELL</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No products yet</Text>
        }
      />
    </View>
  );
};

export default DashboardPage;