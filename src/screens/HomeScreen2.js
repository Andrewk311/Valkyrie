import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text>
      <Ionicons name="md-home" size={80} color="#006600" />
    </View>
  );
};
  
export default Home;