import React, { useState } from "react";
import { Text, View, TextInput, Button, Dimensions, TouchableOpacity, Image } from "react-native";
import { ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Item, HeaderButton, HeaderButtons} from "react-navigation-header-buttons";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

const win = Dimensions.get('window');
const Account = (props) => {
  const [input, setInput] = useState("");
  return (
    <Authenticator.Provider>
        <Authenticator>
        <ScrollView style={{marginHorizontal:0, backgroundColor:"rgba(227,55,55,1)"}}>
        {/*
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#006600", fontSize: 40 }}>Account Screen!</Text>
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
          <SignOutButton />
        </View>
        */}
          <TouchableOpacity
            style={styles.orderStatusBtn}
            onPress={() => props.navigation.navigate('Prescription')} 
          >         
          <Ionicons name="ios-map" size={50} color="black" />
          <View style={{marginLeft:20}}>     
          <Text style={{color:"#000000", fontWeight:"bold", fontSize:20}}>Order Status</Text>
          <Text style={{color:"white", fontWeight:"bold"}}>Live Tracking Available</Text>
          </View>  
        </TouchableOpacity>

          <View style={styles.optionsContainer}>
            <TouchableOpacity
                style={styles.optionBtn}
                onPress={() => props.navigation.navigate('Prescription')} 
              >         
              <View>     
              <Text style={styles.optionTitle}>Delivery Settings</Text>
              <Text style={styles.optionDescription}>Pin-point your drop-off location</Text>
              </View>  
              <Ionicons name="ios-arrow-forward" size={30} color="#AA9798"/>
            </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionBtn}
                onPress={() => props.navigation.navigate('Contact')} 
              >
                <View>
                <Text style={styles.optionTitle}>Insurance Card</Text>
                <Text style={styles.optionDescription}>Update your card and connect to your physician</Text>
                </View>
                <Ionicons name="ios-arrow-forward" size={30} color="#AA9798"/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionBtn}
              onPress={() => props.navigation.navigate('Tracking')} 
            >
              <View>
              <Text style={styles.optionTitle}>Manage Prescription</Text>
              <Text style={styles.optionDescription}>view prescriptions and schedule refills</Text>
              </View>
              <Ionicons name="ios-arrow-forward" size={30} color="#AA9798"/>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionBtn}
              onPress={() => props.navigation.navigate('Tracking')} 
            >
              <View>
              <Text style={styles.optionTitle}>Payment Options</Text>
              <Text style={styles.optionDescription}>Select your primary payment method or insurance</Text>
              </View>
              <Ionicons name="ios-arrow-forward" size={30} color="#AA9798"/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionBtn}
              onPress={() => props.navigation.navigate('Tracking')} 
            >
              <View>
              <Text style={styles.optionTitle}>Profile Settings</Text>
              <Text style={styles.optionDescription}>Change password, personal information, and notifications</Text>
              </View>
              <Ionicons name="ios-arrow-forward" size={30} color="#AA9798" marginRight="0"/>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionBtn}
              onPress={() => props.navigation.navigate('Tracking')} 
            >
              <View>
              <Text style={styles.optionTitle}>Order History</Text>
              <Text style={styles.optionDescription}>View all previous orders and current order status</Text>
              </View>
              <Ionicons name="ios-arrow-forward" size={30} color="#AA9798" marginRight="0"/>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </Authenticator>
    </Authenticator.Provider>
  );
};

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button color='#E33737' title="Sign Out" onPress={signOut} />;
}

Account.navigationOptions = ({ navigation }) => {
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
          <TouchableOpacity
            style={styles.customBtn}
            onPress={() => navigate('Cart')} 
          >
            <Ionicons name="cart" size={20} color="#000000"/>
            <Text style={styles.customBtnText}>Cart</Text>
         </TouchableOpacity>
        </View>

      </View>
        </>
      )
  }                
}

export default Account;
const styles = StyleSheet.create({

  orderStatusBtn:{
    backgroundColor: "#D7CBCB",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 20,
    paddingVertical:10,
    paddingHorizontal:70,
    marginTop:20,
  },
  optionsContainer:{
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:20,
  },
  optionBtn: {
    backgroundColor: "white",
    borderWidth:0.26,
    borderColor:"#AA9798",
    height:win.height / 9,
    flexDirection: "row",
    paddingVertical:20,
  },
  optionTitle:{
    fontWeight:"bold",
    fontSize:23,
    color:"#AA9798",
    marginLeft:10,
    width:win.width-50,
  },
  optionDescription:{
    color:"black",
    fontSize:12,
    marginLeft:10,
    marginBottom:0,
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
});