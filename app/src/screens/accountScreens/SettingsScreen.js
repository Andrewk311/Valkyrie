import React from "react";
import { Text, View, Button } from "react-native";
import { ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
  
const Settings = (props) => {
    return (
      <ScrollView style={{marginHorizontal:0, backgroundColor:"rgba(227,55,55,1)"}}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Settings Screen!</Text>
        <Ionicons name="ios-settings-sharp" size={80} color="#006600" />
      </View>
      </ScrollView>
    );
  };

Settings.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Settings',
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

export default Settings;