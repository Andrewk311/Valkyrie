import React from "react";
import { Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Contact = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Contact Screen!</Text>
        <Ionicons name="ios-phone-portrait-sharp" size={80} color="#006600" />
      </View>
    );
  };

Contact.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Contact',
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

export default Contact;