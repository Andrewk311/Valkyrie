import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from 'react-native-maps';
  
const Tracking = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Tracking Screen!</Text>
        <Ionicons name="ios-map-sharp" size={80} color="#006600" />
        <MapView style={styles.map} />
      </View>
    );
  };

Tracking.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Tracking',
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

export default Tracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});