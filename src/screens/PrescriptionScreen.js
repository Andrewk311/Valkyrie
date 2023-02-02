import React from "react";
import { Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Prescription = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Prescription Screen!</Text>
        <Ionicons name="ios-medical-sharp" size={80} color="#006600" />
      </View>
    );
  };

Prescription.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Prescriptions',
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

export default Prescription;