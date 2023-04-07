import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View, Button, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Authenticator, useAuthenticator} from '@aws-amplify/ui-react-native';
import { Auth } from 'aws-amplify';
import {CartCountIcon} from "../components/CartCountIcon";
import Icon from "react-native-vector-icons/Ionicons";

const win = Dimensions.get('window');
const widthL = win.width;
const heightL = win.heigh - 56;

const Home = (props) => {
  const [attributes, setAttributes] = React.useState(null);

  React.useEffect(() => {
    async function getUserInfo() {
      const user = await Auth.currentAuthenticatedUser();
      setAttributes(user);
    }
    getUserInfo(); 
  }, []);

  var name = ''
  if(attributes == null){
  } else {
    name = attributes.attributes.name.toString();
  }

  return ( 
    <Authenticator.Provider>
        <Authenticator>
          <ScrollView style={{marginHorizontal:0, backgroundColor:"rgba(227,55,55,1)"}}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome {name}!</Text>
            <View style={styles.rect1}>
              <Text style={styles.blackBold}>Selected Pharmacy</Text>
              <Text style={{fontWeight:"bold", color:"#AD3A5C", marginLeft:win.width/10,marginTop:8, fontSize:18}}>
                CVS Pharmacy{"\n"}
                <Text style={{color:"#92989B"}}>500 Hadley Center Dr, {"\n"}South Plainfield, NJ, 08901</Text>
                </Text>
            </View>
            <View style={styles.ad1}>
              <Ionicons name="ios-home" size={50} color="#AD3A5C" />
              <View>
                <Text style={styles.blackBold}>We've got you covered</Text>
                <Text style={{color:"#92989B", fontWeight:"bold"}}>Schedule a Delivery right{"\n"}to your door step</Text>
              </View>
          </View>
          <View>
            <Text style={{fontWeight:"bold", color:"#FFFFFF", fontSize:39, marginLeft:10, marginTop:10}}>Popular</Text>
          </View>
          <View style={styles.widgetContainer}>
            <TouchableOpacity
                style={styles.widgetBtn}
                onPress={() => props.navigation.navigate('Prescription')} 
              >                
              <Text style={styles.customWidgetText}>Refill a{"\n"}Prescription</Text>
                <View style={{position:"relative", marginLeft:60, marginTop:10}}>
                <Ionicons name="ios-alarm" size={30} color="#AD3A5C"/>
                </View>
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.widgetBtn}
                onPress={() => props.navigation.navigate('Contact')} 
              >
                <Text style={styles.customWidgetText}>Contact a{"\n"}Pharmacist</Text>
                <View style={{position:"relative", marginLeft:60, marginTop:10}}>
                <Ionicons name="ios-call" size={30} color="#AD3A5C"/>
                </View>
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.widgetBtn}
                onPress={() => props.navigation.navigate('Tracking')} 
              >
                <Text style={styles.customWidgetText}>Track Your{"\n"}Order</Text>
                <View style={{position:"relative", marginLeft:60, marginTop:10}}>
                <Ionicons name="ios-map" size={30} color="#AD3A5C"/>
                </View>
            </TouchableOpacity>
          </View>
          <View style={styles.ad2}>
              <Ionicons name="cart" size={widthL*(0.2)} color="#AD3A5C" />
              <Text style={{color:"#000000", fontWeight:"bold", fontSize:win.width*(0.05)}}>Shop and spend 15+{"\n"}for free delivery!</Text>
            </View>
          </View>
        </ScrollView>
        </Authenticator>
    </Authenticator.Provider>
  );
};

Home.navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    return {
      title:"VALKYRIE",
      headerLeft: () => (
        <Image
        style={{width: 55, marginTop:-8, marginLeft:3, resizeMode: 'contain'}}
        source={require('../../assets/logo.png')} 
        ></Image>
      ),

      headerRight: () => (
      <>
        <View style={styles.container1}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.customBtn}
              onPress={() => navigate('About')} 
            >
              <Ionicons name="people-sharp" size={20} color="#000000" />
              <Text style={styles.customBtnText}>About Us</Text>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.customBtn}
              onPress={() => navigate('Messages')} 
            >
              <Ionicons name="mail" size={20} color="#000000"/>
              <Text style={styles.customBtnText}>Messages</Text>
           </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
          <CartCountIcon navigation={navigation}/>
          </View>
        </View>
          </>
        )
    }             
}
  
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,55,55,1)",
    marginTop: -10
  },
  rect: {
    width: Dimensions.get('window').width,
    height: 69,
    alignSelf: "center",
    alignItems:'center',
  },
  welcome: {
    color: "#FFFFFF",
    height: 47,
    width: 375,
    fontSize: 40,
    alignSelf:'center',
    fontWeight:"bold", 
    marginTop: 20,
    textAlign:'center',
  }, 
  rect1: {
    width: Dimensions.get('window').width,
    height: 124,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
    borderRadius: 15,
    width:win.width*(0.98),
    alignSelf:"center",
  },
  blackBold: {
    color: "#00000",
    fontSize: 25,
    textAlign: "center",
    fontWeight:"bold",
    marginTop: 11
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight:10
  },
  buttonContainer: {
    flex: 1,
    alignContent:"center"
  },
  customBtn:{
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 8
  },
  customBtnText: {
    alignContent:"center",
    marginLeft:2,
  },
  ad1: {
    borderRadius: 15,
    backgroundColor: "white",
    width:win.width*(0.98),
    alignSelf:"center",
    marginTop:10,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign:'center',
    paddingVertical:15,
    paddingHorizontal:50
  },
  widgetContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10,
  },
  widgetBtn: {
    backgroundColor: "white", 
    width: win.width/3.5, 
    height: win.height/8,
    borderRadius: 30,
    marginLeft:10,
    marginRight:10,
  },
  customWidgetText:{
    marginTop:"20%",
    fontWeight:"bold",
    marginLeft:10,
    fontSize:win.width/30,
    marginBottom:-10,
  },
  ad2: {
    borderRadius: 15,
    backgroundColor: "white",
    width:win.width*(0.98),
    alignSelf:"center",
    marginTop:10,
    paddingHorizontal: 50,
    paddingVertical:40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  
});