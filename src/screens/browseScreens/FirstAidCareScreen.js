import React from "react";
import { Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const FirstAidCare = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>First-Aid Care Screen!</Text>
        <Ionicons name="ios-settings-sharp" size={80} color="#006600" />
      </View>
    );
  };

FirstAidCare.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'First-Aid Care',
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

export default FirstAidCare;