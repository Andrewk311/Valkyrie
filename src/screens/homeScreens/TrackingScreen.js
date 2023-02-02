import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from 'react-native-maps';
import { Dimensions } from "react-native";
  
const Tracking = (props) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(227,55,55,1)", flex: 1}}>
        <View style={styles.rect}>
          <Text style={styles.where}> Where's My Order? </Text>
        </View>
        <MapView style={styles.map} initialRegion={{
          latitude: 40.499046325683594,
          longitude: -74.4476089477539,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,}} 
        />
        {/* <View style={styles.rect2}>

        </View> */}
        
      </View>
    );
  };

Tracking.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Tracking',
      headerLeft: (props) => (
        <Button
        title="<--"
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
    width: '90%',
    height: '60%',
    borderColor: '#FF0000',
    paddingHorizontal: 50,
    paddingVertical:40,
    marginTop: 100
  },
  rect: {
    width: Dimensions.get('window').width,
    height: 69,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    marginTop: -117
  },
  where: {
    color: "#AA9798",
    height: 47,
    width: 375,
    fontSize: 40,
    textAlign: "center",
    fontWeight:"bold", 
    marginTop: 20
  }, 
  // rect2: {
  //   width: Dimensions.get('window').width,
  //   height: 69,
  //   alignSelf: "center",
  //   backgroundColor: "#FFFFFF",
  //   marginTop: 138
  // },
});