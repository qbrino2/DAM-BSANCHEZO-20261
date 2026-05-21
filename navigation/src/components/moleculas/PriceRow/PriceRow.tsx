import React from "react";
import { View, Text } from "react-native";
import { CurrencyInput } from "../../atoms";
import { styles } from "./PriceRowStyles";

interface PriceRowProps {
  costoCompra: string;
  precioVenta: string;
  onCostoChange: (text: string) => void;
  onPrecioChange: (text: string) => void;
}

const PriceRow = ({ costoCompra, precioVenta, onCostoChange, onPrecioChange }: PriceRowProps) => {
  return (
    <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.label}>PURCHASE COST</Text>
        <View style={styles.dollarRow}>
          <Text style={styles.dollar}>$</Text>
          <CurrencyInput value={costoCompra} onChangeText={onCostoChange} />
        </View>
      </View>
      <View style={styles.col}>
        <Text style={styles.label}>SALE PRICE ($)</Text>
        <CurrencyInput value={precioVenta} onChangeText={onPrecioChange} />
      </View>
    </View>
  );
};

export default PriceRow;