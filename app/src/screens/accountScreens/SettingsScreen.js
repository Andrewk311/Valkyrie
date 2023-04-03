import React from "react";
import { Text, View, Button } from "react-native";
import { ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Authenticator, useAuthenticator} from '@aws-amplify/ui-react-native';
import { Auth } from 'aws-amplify';
import react from "react";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import Geocoder from 'react-native-geocoding';

  
const Settings = (props) => {
  const [attributes, setAttributes] = React.useState(null);
  const [inputAddress, setInputAddress] = React.useState('');
  const [hiddenText, setHiddenText] = React.useState('');
  const [name, setName] = React.useState('');
  const [familyName, setFamilyName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [refreshKey, setRefreshKey] = React.useState(0);

  var googleMapsAPI = "AIzaSyBmF_o7JmYo55KiewrTHqiDOupJ5FcbxRA";   //google maps api key to convert address to lat and long
  Geocoder.init(googleMapsAPI);

  // first retrival of user info
  React.useEffect(() => {
    async function getUserInfo() {
      const user = await Auth.currentAuthenticatedUser();
      setAttributes(user);
    }
    getUserInfo(); 
  }, []);


  async function getCoords(address) {
    console.log("address for G: ", address);
    try {
      const json = await Geocoder.from(address);
      const { lat, lng } = json.results[0].geometry.location;
      console.log("lng: ", lng);
      return { latitude: lat, longitude: lng };
    } catch (error) {
      console.warn(error);
    }
  }

  // var name = ''
  // var family_name = ''
  // var email = ''
  // var address = ''
  React.useEffect(() => {
    if (attributes) {
      console.log(attributes)
      setName(attributes.attributes.name.toString());
      setFamilyName(attributes.attributes.family_name.toString());
      setEmail(attributes.attributes.email.toString());
      if (attributes.attributes.address != null) {
        setAddress(attributes.attributes.address.toString());
        setInputAddress(attributes.attributes.address.toString());
      }
    }
  }, [attributes]);
  
  
  
  // update address 
  async function updateUserInfo(inputAddress) {
    const coords = await getCoords(inputAddress);
    const { latitude: lat, longitude: lng } = coords;
    console.log('lat: ', lat);
    console.log(inputAddress)
    const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        'address': inputAddress,
        'custom:latitude': lat.toString(),
        'custom:longitude': lng.toString()
      });
    setAttributes(user);
  }

  const handleSubmit = async (event) => {
    if(inputAddress.length <= 0){
      setHiddenText('Invalid Address');
    }
    else{
      setHiddenText('Address Updated');
      await updateUserInfo(inputAddress)
      setRefreshKey(refreshKey + 1);
    }
    
  };
  

  return (
    <Authenticator.Provider>
      <Authenticator>
        <ScrollView style={{marginHorizontal:0, backgroundColor:"rgba(227,55,55,1)"}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.whiteTitle}>General Info</Text>
            <View style={{ borderBottomColor: 'white', borderBottomWidth: 3, width:'100%', alignSelf:'center', marginBottom:20,}}/>
            <View style={{marginLeft:20,}}>
            <Text style={styles.header}>Full Name</Text>
              <TextInput
                style={styles.input}
                value={name + ' ' + familyName}
                editable={false}
              />
            <Text style={styles.header}>Email Address</Text>
              <TextInput
                style={styles.input}
                value={email}
                editable={false}
              />
            <Text style={styles.header}>Delivery Address</Text>
            {address != '' ? 
            <TextInput 
              style={styles.input} 
              onChangeText={setInputAddress} 
              value={inputAddress} 
              editable={true}/> : <TextInput 
              style={styles.input} 
              onChangeText={setInputAddress} 
              value={"Missing Address, Please input Below"} 
              editable={false}/>}
            {/* <Text style={styles.header}>Enter a Delivery Address</Text> */}
            <View style={{flexDirection: 'column', marginBottom:10}}>
              {/* <TextInput
                style={styles.input}
                onChangeText={setInputAddress}
                value={inputAddress}
                multiline
              /> */}
            <TouchableOpacity
                  onPress={handleSubmit}
                  style= {styles.btn}>
                  <Text style={{fontSize:18, fontWeight:'bold'}}>Enter</Text>
              </TouchableOpacity>
            </View>     
          <Text style={{fontSize:18, fontWeight:'bold', textAlign:'center'}}>{hiddenText}</Text>
          </View>
          </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Authenticator>
    </Authenticator.Provider>
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
const styles = StyleSheet.create({
  whiteTitle: {
    color: '#FFFFFF',
    fontSize:40,
    fontWeight:"bold", 
    marginTop:20,
    marginLeft:20,
    marginBottom:5,
  },
  header: {
    color: 'white',
    fontSize:20,
    fontWeight:"bold", 
    marginBottom:5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor:'grey',
    width: '90%',
    backgroundColor:"white",
    marginBottom:20,
  },
  btn: {
    backgroundColor: "white", 
    width: '20%',
    height: 50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:20,
    tintColor:"red",
    shadowColor:"green"
  }
});