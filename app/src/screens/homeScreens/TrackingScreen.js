import React, { useState, useEffect } from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, {Marker} from 'react-native-maps';
import { Dimensions } from "react-native";

const win = Dimensions.get('window');
const widthL = win.width;

const Tracking = (props) => {
  
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(227,55,55,1)", flex: 1}}>
        <View style={styles.rect}>
          <Text style={styles.where}> Where's My Order? </Text>
        </View>
          <Text style={{fontWeight:"bold", color:"#000000", fontSize:24, marginTop: -460}}>ORDER #NB10992</Text>
        <MapView style={styles.map} initialRegion={{
          latitude: 40.499046325683594,
          longitude: -74.4476089477539,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,}}
          showsUserLocation 
        > 
          
        </MapView>

        <View style={styles.rect2}>
        {/* <View style={styles.iconBoxStatusBars}>
            <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')}
                />
            <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')}
            />
            <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/GrayLine.png')}
            />
          </View> */}
          <View style={styles.iconBoxStatus}>
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')}
            />
            <Image style={styles.tinyLogoStatus}
              source={require('./../../customIcons/RedLine.png')}
            />
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')}
            />
            <Image style={styles.tinyLogoStatus}
              source={require('./../../customIcons/RedLine.png')}
            />
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')}
            />
            <Image style={styles.tinyLogoStatus}
              source={require('./../../customIcons/GrayLine.png')}
            />
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')}
            />
          </View>
          <View style={styles.iconBox}>
            <View style={styles.logoTextBox}>
              <Image style={styles.tinyLogo}
              source={require('./../../customIcons/OrderPlaced.png')}
              />
              <Text style={styles.logoText}>Order Placed</Text>
            </View>
            <View style={styles.logoTextBox}>
              <Image style={styles.tinyLogo}
              source={require('./../../customIcons/OrderVerified.png')}
              />
              <Text style={styles.logoText}>Order Verified</Text>
            </View>
            <View style={styles.logoTextBox}>
              <Image style={styles.tinyLogo}
              source={require('./../../customIcons/OrderShipped.png')}
              />
              <Text style={styles.logoText}>Order Shipped</Text>
            </View>
            <View style={styles.logoTextBox}>
              <Image style={styles.tinyLogo}
              source={require('./../../customIcons/OrderDelivered.png')}
              />
              <Text style={styles.logoText}>Delivered!</Text>
            </View>

          
          </View>
          
        </View>
        
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
    position: "absolute",
    borderRadius: 15,
  },
  rect: {
    width: Dimensions.get('window').width,
    height: 69,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    position: "absolute",
    top:0
  },
  where: {
    color: "#AA9798",
    fontSize: 30,
    textAlign: "center",
    fontWeight:"bold", 
    marginTop: 20
  }, 
  rect2: {
    width: Dimensions.get('window').width,
    backgroundColor: "white",
    alignSelf:"center",
    marginTop:10,
    paddingVertical:50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0
  },
  iconBox: {
    width: Dimensions.get('window').width/1.16,
    backgroundColor: "white",
    alignSelf:"center",
    marginTop:-10,
    paddingVertical:0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 17,
    right: 33
  },
  iconBoxStatus: {
    width: Dimensions.get('window').width/1.67,
    backgroundColor: "white",
    alignSelf:"center",
    marginTop:-10,
    paddingVertical:0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    right: 103
  },
  iconBoxStatusBars: {
    width: Dimensions.get('window').width/1.67,
    backgroundColor: "white",
    alignSelf:"center",
    marginTop:-10,
    paddingVertical:0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
    right: 72
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  tinyLogoStatus: {
    width: 60,
    height: 5,
  },
  logoTextBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',       //THIS LINE HAS CHANGED
    paddingLeft: 10,
  },
  logoText: {
    fontSize:8,
    textAlign:"center",
    alignSelf:"center"
  }
});