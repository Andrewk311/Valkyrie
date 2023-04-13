import React, { useState, useEffect, useContext } from "react";
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, {Marker} from 'react-native-maps';
import { Dimensions } from "react-native";
import axios from 'axios';
import { Auth } from 'aws-amplify';
import { WebSocketContext } from "../../WebSocketContext";
import { CartContext } from "../browseScreens/CartContext";
import home from './../../customIcons/HomeMarker.png';
import { updateOrder } from '../../services/updateOrder';



const win = Dimensions.get('window');
const widthL = win.width;

const Tracking = (props) => {
  
  const [location, setLocation] = useState(null);
  const { websocket, orderStatus } = useContext(WebSocketContext);
  const { orderNumber } = useContext(CartContext);
  const [attributes, setAttributes] = useState(null);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [attributesLoaded, setAttributesLoaded] = useState(false);
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    async function getUserInfoAndSetCoordinates() {
      const user = await Auth.currentAuthenticatedUser();
      setAttributes(user);
      //console.log(user)
      setLatitude(parseFloat(user.attributes['custom:latitude']));
      setLongitude(parseFloat(user.attributes['custom:longitude']));
      setEmail(user.attributes.email);
      console.log(latitude);
    }
    getUserInfoAndSetCoordinates();
  }, []);

  useEffect(() => {
    if (websocket) {
      console.log('connected');
      console.log(orderStatus);
      const handleMessage = (event) => {
        console.log("Message received (on tracking):", event.data);
        const data = JSON.parse(event.data);
        console.log(data);
        console.log(data.status);
        console.log(orderStatus)
        // setOrderStatus(data.status);
      };
  
      websocket.addEventListener('message', handleMessage);
  
      return () => {
        if (websocket) {
          websocket.removeEventListener('message', handleMessage);
        }
      };
    }
  }, [websocket, orderStatus]);

  useEffect(() => {
    //in here add check that if the drone coordinates is within a certain number of the target coordinate, mark it as delivered? Or wait for a signal from the drone can prob get that.
    let interval;
    console.log("OrderStatus: " + orderStatus)
    console.log("OrderNum: "  + orderNumber);
    if (orderStatus === 'Order Shipped'){
      console.log('This should work');
      const getCoordinates = async () => {
        const response = await axios.get('https://l4ob0tegqc.execute-api.us-east-1.amazonaws.com/production/getcoordinates');
        const body = JSON.parse(response.data.body)
        setLocation({
          latitude: body.latitude,
          longitude: body.longitude,
        });
      }
 
      interval = setInterval(() => {
        getCoordinates();
      }, 3000);
    }
    return () => clearInterval(interval);

  }, [orderStatus]);

  
  function sendDeliveredStatus(){
    updateOrder(orderNumber, false, false);
    var test = { "action": "orderStatusUpdate", "data": { "status": "Order Delivered", "email": email }};
    websocket.send(JSON.stringify(test));
  }

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(227,55,55,1)", flex: 1}}>
        <View style={styles.rect}>
          <Text style={styles.where}> Where's My Order? </Text>
        </View>
        <View>
        {orderStatus === null && (
        <Text style={{fontWeight:"bold", color:"#000000", fontSize:24, marginTop: -250, }}>
          Place an order to see tracking!
        </Text>
      )}
      {orderStatus === "Order Shipped" && (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -250 }}>
          <Text style={{fontWeight:"bold", color:"#000000", fontSize:24 }}>
            ORDER #{orderNumber}
          </Text>
          <TouchableOpacity
            onPress={sendDeliveredStatus}
            style={{
              backgroundColor: "#4CAF50",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 18 }}>
              Verify Delivery
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {orderStatus === "Order Delivered" && (
          <Text style={{fontWeight:"bold", color:"#000000", fontSize:22, marginTop: -250 }}>
            ORDER #{orderNumber} Delivered!
          </Text>
      )}
      {orderStatus !== null && orderStatus !== "Order Shipped" && orderStatus !== "Order Delivered" && (
        <Text style={{fontWeight:"bold", color:"#000000", fontSize:24, marginTop: -250 }}>
          ORDER #{orderNumber}
        </Text>
      )}
        </View>
        {latitude && longitude ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0072,
              longitudeDelta: 0.0071,
            }}
          >
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
            >
              <Image source={home} style={{height:25, width:25}}/>
            </Marker>
            {location && (
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
              />
            )}
          </MapView>
        ): (
          <Text style={styles.noAddressText}>
            Please enter an address to get access to tracking features.
          </Text>
        )}

        <View style={styles.rect2}>
          <View style={styles.iconBoxStatus}>
            {orderStatus == 'Order Placed' ? 
              <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/GrayLine.png')} />
            </>
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/GrayLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
            </>
            </>
            : ''
            }
            { orderStatus == 'Order Confirmed' ? 
              <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
            </>
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/GrayLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
            </>
            </>
              : 
              ''
            }
            { orderStatus == 'Order Shipped' ? 
              <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
            </>
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
            </>
            </>
            
              : 
              ''}

            { orderStatus == 'Order Delivered' ? 
              <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
            </>
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/RedLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/RedCircle.png')} />
            </>
            </>
              : 
              ''
            }
            { orderStatus != 'Order Shipped' && orderStatus != 'Order Confirmed' && orderStatus != 'Order Placed' && orderStatus != 'Order Delivered' ? 
              <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/GrayLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/GrayLine.png')} />
            </>
            <Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
              <Image style={styles.tinyLogoStatus}
                source={require('./../../customIcons/GrayLine.png')} />
                <><Image style={styles.tinyLogo}
              source={require('./../../customIcons/GrayCircle.png')} />
            </>
            </>
            : ''
          }
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
    marginBottom:10,
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
    paddingVertical:50,
    position: "absolute",
    bottom: 0
  },
  iconBox: {
    width: Dimensions.get('window').width/1.25,
    backgroundColor: "white",
    marginTop:-10,
    flexDirection: "row",
    position: "absolute",
    bottom: 17,
    alignSelf:'center',
  },
  iconBoxStatus: {
    width: Dimensions.get('window').width/1.67,
    backgroundColor: "white",
    alignSelf:"center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 60,
  },
  iconBoxStatusBars: {
    width: Dimensions.get('window').width/1.67,
    backgroundColor: "white",
    marginTop:-10,
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
  },
  noAddressText: {
    fontSize: 14,
    textAlign: 'center',
  },
  marker: {
    width: 5,
    height: 5,
  },
});