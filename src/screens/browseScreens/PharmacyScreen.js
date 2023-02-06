import React from "react";
import { Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Pharmacy = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Pharmacy Screen!</Text>
        <Ionicons name="ios-settings-sharp" size={80} color="#006600" />
      </View>
    );
  };

Pharmacy.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Pharmacy',
      headerLeft: (props) => (
        <Button
        title="Back"
        onPress={() => {
            goBack();
        }}
        />
      )
    }             
  }

export default Pharmacy;