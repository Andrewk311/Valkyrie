import React from "react";
import { Text, View, Button } from "react-native";
import { ScrollView, StyleSheet, TouchableWithoutFeedback, Keyboard, Modal } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Auth } from 'aws-amplify';
import react from "react";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import Geocoder from 'react-native-geocoding';
import MapView, { Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';


const Settings = (props) => {
  const [attributes, setAttributes] = React.useState(null);
  const [inputAddress, setInputAddress] = React.useState('');
  const [hiddenText, setHiddenText] = React.useState('');
  const [name, setName] = React.useState('');
  const [familyName, setFamilyName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [refreshKey, setRefreshKey] = React.useState(0);
  const [initialCoords, setInitialCoords] = React.useState({ latitude: 0, longitude: 0 });
  const [selectedCoords, setSelectedCoords] = React.useState(null);
  const [showMap, setShowMap] = React.useState(false);
  const [isDeliveryLocationSet, setIsDeliveryLocationSet] = React.useState(false);


  function renderMapModal() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={showMap}
      >
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 8 }}
            initialRegion={{
              latitude: initialCoords.latitude,
              longitude: initialCoords.longitude,
              latitudeDelta: 0.001, // Smaller value for more zoom
              longitudeDelta: 0.001, // Smaller value for more zoom
            }}
            zoomEnabled={false} // Disable zoom gestures
            scrollEnabled={true} // Disable scroll (pan) gestures
          >
            <Marker
              draggable
              coordinate={initialCoords}
              onDragEnd={(e) => setSelectedCoords(e.nativeEvent.coordinate)}
            />
          </MapView>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => handleConfirmSelection()} style={styles.confirmButton}>
              <Text style={styles.buttonText}>Confirm Delivery Location</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowMap(false)} style={styles.cancelButton}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  var googleMapsAPI = "AIzaSyCu9MM1Gg0DsRt37c9fWu6mO4gA8TqUQsM";   //google maps api key to convert address to lat and long
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
      //console.log(attributes)
      setName(attributes.attributes.name.toString());
      setFamilyName(attributes.attributes.family_name.toString());
      setEmail(attributes.attributes.email.toString());
      if (attributes.attributes.address != null) {
        setAddress(attributes.attributes.address.toString());
        setInputAddress(attributes.attributes.address.toString());
        if(selectedCoords === null){
          setSelectedCoords({latitude: attributes.attributes['custom:latitude'], longitude: attributes.attributes['custom:longitude']})
        }
        setIsDeliveryLocationSet(true);
      }
    }
  }, [attributes]);



  // update address 
  async function updateUserInfo(inputAddress, selectedCoords) {
    const coords = await getCoords(inputAddress);
    const { latitude: lat, longitude: lng } = selectedCoords;
    // setInitialCoords(coords);
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
    if (inputAddress.length <= 0) {
      setHiddenText('Invalid Address');
    } else {
      setHiddenText('');
      const coords = await getCoords(inputAddress);
      setInitialCoords(coords);
      setShowMap(true);
      if(inputAddress != address){
        setIsDeliveryLocationSet(false);
      }
      setAddress(inputAddress);
      //set delivery location set to false if the new address entered is different than the original
    }
  };

  async function handleConfirmSelection() {
    if (selectedCoords) {
      console.log("selected coords are: " + selectedCoords.latitude + ", " + selectedCoords.longitude)
      await updateUserInfo(inputAddress, selectedCoords);
      setInputAddress(inputAddress);
      setShowMap(false);
      setIsDeliveryLocationSet(true);
    } else {
      alert('Please select a delivery location.');
    }
  }


  return (
    <Authenticator.Provider>
      <Authenticator>
        {renderMapModal()}
        <ScrollView style={{ marginHorizontal: 0, backgroundColor: "rgba(227,55,55,1)" }}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text style={styles.whiteTitle}>General Info</Text>
              <View style={{ borderBottomColor: 'white', borderBottomWidth: 3, width: 100, alignSelf: 'center', marginBottom: 20, }} />
              <View style={{ marginLeft: 20, }}>
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
                {address != '' ? (
                  <TextInput
                    style={styles.input}
                    onChangeText={setInputAddress}
                    value={inputAddress}
                    editable={true}
                  />
                ) : (
                  <TextInput
                    style={styles.input}
                    onChangeText={setInputAddress}
                    value={"Missing Address, Please input Below"}
                    editable={false}
                  />
                )}

                {isDeliveryLocationSet ? (
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 5 }}>
                      Drop off location selected
                    </Text>
                    <MaterialIcons name="check-circle" size={24} color="green" />
                  </View>
                ) : (
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                      Drop off location not selected
                    </Text>
                  </View>
                )}
                <View style={{ flexDirection: 'column', marginBottom: 10 }}>
                  <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Enter</Text>
                  </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{hiddenText}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </Authenticator>
    </Authenticator.Provider>
  );
};

Settings.navigationOptions = ({ navigation: { goBack } }) => {
  return {
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
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5,
  },
  header: {
    color: 'white',
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',
    backgroundColor: "white",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "white",
    width: '20%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    tintColor: "red",
    shadowColor: "green"
  },
  confirmButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: '#F44336',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});