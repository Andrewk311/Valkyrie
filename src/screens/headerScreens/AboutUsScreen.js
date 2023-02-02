import React from "react";
import { Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const About = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>About Us Screen!</Text>
        <Ionicons name="people-sharp" size={80} color="#006600" />
      </View>
    );
  };
  
About.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'About Us',
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
  
export default About;