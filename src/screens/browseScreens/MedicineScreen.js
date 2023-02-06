import React from "react";
import { Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Medicine = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Medicine Screen!</Text>
        <Ionicons name="ios-settings-sharp" size={80} color="#006600" />
      </View>
    );
  };

Medicine.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Medicine',
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

export default Medicine;