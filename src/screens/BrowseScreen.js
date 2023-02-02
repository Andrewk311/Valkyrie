import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Browse = (props) => {
  const [input, setInput] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#006600", fontSize: 40 }}>Browse Screen!</Text>
      <Ionicons name="ios-home" size={80} color="#006600" />
      <TextInput
        placeholder="Enter your name"
        value={input}
        onChangeText={(value) => setInput(value)}
      />
      <Button
        title="Go to Cart Screen"
        color="#006600"
        onPress={() => props.navigation.navigate("Cart", { username: input })}
      />
    </View>
  );
};

Browse.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation
  return  {
    title: 'Browse',
    headerRight: () => (
      <>
      <Button 
        title="About Us" backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)"
        onPress={() => navigate('About')}
      />
      <Button 
        title="Messages" backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)"
        onPress={() => navigate('Messages')}
      />
      <Button 
        title="Cart" backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)"
        onPress={() => navigate('Cart')}
      />
      </>
    )
  }             
}

export default Browse;