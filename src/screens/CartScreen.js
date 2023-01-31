import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Cart = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Cart Screen!</Text>
      <Ionicons name="ios-cart-sharp" size={80} color="#006600" />
    </View>
  );
};
  
export default Cart;