import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from "react-native";
import { CartContext } from '../browseScreens/CartContext';
import { getProduct } from '../../services/ProductsService';
import { Ionicons } from "@expo/vector-icons";
import { Auth } from 'aws-amplify';
import { createOrder } from '../../services/AddOrder';
import Geocoder from 'react-native-geocoding';

const CartSummary = (props) => {
    const {items, removeItemFromCart, getTotalPrice, addItemToCart} = useContext(CartContext);
    
    const [attributes, setAttributes] = React.useState(null);

    googleMapsAPI = "AIzaSyBmF_o7JmYo55KiewrTHqiDOupJ5FcbxRA";   //google maps api key to convert address to lat and long
    Geocoder.init(googleMapsAPI);

    React.useEffect(() => {   //address given address field to the auth user. Need to move to different file.
      async function getUserInfo() {
        const user = await Auth.currentAuthenticatedUser();
        await Auth.updateUserAttributes(user, {
          'address': '14 east 32nd St. Bayonne, NJ 07002'
        });
        setAttributes(user);
      }
      console.log('hi');
      getUserInfo(); 
    }, []);

    var email = ''
    var address = ''
    if(attributes == null){
      console.log('null email');
    } else {
      console.log(attributes.attributes.email);
      console.log(attributes.attributes.address);
      email = attributes.attributes.email.toString(); //gets email
      address = attributes.attributes.address.toString() //gets address
    }
    var latitudeVal = 0
    var longitudeVal = 0
    async function getLatLong(){  //function to convert address to lat and long
      await Geocoder.from(address).then(json => {
        const { lat, lng } = json.results[0].geometry.location;
        console.log('Latitude:', lat);
        console.log('Longitude:', lng);
        latitudeVal = lat;
        longitudeVal = lng;
      }).catch(error => console.warn(error));
    }

    //use google maps api to switch it to latitude and longitude

    function onAddToCart(productId) {
      addItemToCart(productId);
    }

    function onRemoveFromCart(productId) {
      removeItemFromCart(productId);
    }

    

    async function checkTotalItems(){
      console.log(items);
      console.log(email);
      console.log(address);
      await getLatLong();
      console.log(latitudeVal)
      console.log(longitudeVal)

      const orderData = {
        latitude: latitudeVal,
        longitude: longitudeVal,
        totalPrice: 44,
        totalWeight: 2.7,
        email: "testing3@gmail.com",
        isActive: true,
        orderNumber: "13",  //change every order or it wont go through
        inTransit : false,
        isAccepted: false,
        orders: [
          { name: "Bandage", quantity: 10 },
          { name: "VitaminD", quantity: 1 },
          { name: "Ashwaganda", quantity: 2 }
        ]
      };
      console.log(orderData);
      addOrder(orderData);
    }

    

    async function addOrder(order){
      try{
        createOrder(order);
        console.log('added order number #' + order.orderNumber);
      } catch (err) {
        console.log('Error adding order', err);
      }
    }

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={styles.cartLineTotal}>
          <Text style={{fontWeight:'bold', fontSize:20, marginTop:10}}>Total</Text>
          <Text style={{fontWeight:'bold', marginLeft:10, fontSize:20, marginTop:10}}>${total.toFixed(2)}</Text>
          <Button title={"Checkout"} onPress={checkTotalItems}></Button>
       </View>
    );
  }
function renderItem({item}) {
    if (item.qty > 0){
      return (
       <View style={styles.cartLine}>
          <View style={{flexDirection:'row', height:180, alignItems:'center'}}>
            <Image style={styles.tinyLogo} source={getProduct(item.id).src}/>
            <View style={{flexDirection:'column', marginLeft:20}}>
              <Text style={styles.productName}>{item.product.name}</Text>
              <Text style={styles.productCost}>$ {item.totalPrice.toFixed(2)}</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center', marginLeft:20}}>
              <TouchableOpacity
              activeOpacity={.8} //The opacity of the button when it is pressed
              style = {styles.button}
              onPress={() => {onAddToCart(item.id)}}
              >
              <Ionicons name="add" size={23} color="#AD3A5C"/>
            </TouchableOpacity>
            <Text style={{alignSelf:'center', marginVertical:8, fontSize:20, color:"#AD3A5C"}}>{item.qty}</Text>
            <TouchableOpacity
              activeOpacity={.8} //The opacity of the button when it is pressed
              style = {styles.button}
              onPress={() => {onRemoveFromCart(item.id)}} 
              >
              <Ionicons name="trash-outline" size={20} color="#AD3A5C"/>
            </TouchableOpacity>
          </View>
        </View>
       </View>
    );
      }
  }

  return (
    <FlatList
      style={styles.productList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}

CartSummary.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Cart Summary',
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

export default CartSummary;

const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: "#AD3A5C",
    borderTopWidth: 3, 
    alignItems:'center',
    width:370,
  },
  totalText: {
    fontSize: 20, 
    lineHeight: 30, 
    color:'#333333',
    fontWeight:'bold',
    width: 202,
    justifyContent:'center'
  },
  productName: {
    fontSize: 20, 
    lineHeight: 30, 
    color:'#333333',
    fontWeight:'bold',
    width: 202,
    justifyContent:'center'
  },
  productCost: { 
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333',
  },
  productList: {
    backgroundColor: 'white',
  },
  itemsListContainer: {
    backgroundColor: 'white',
    marginLeft:10,
  },
  tinyLogo:{
    width: 70,
    height: 70,
    resizeMode:'stretch',
},
button: {
  backgroundColor: 'white',
  borderWidth: 2,
  borderRadius: (45 / 2),
  borderColor:"#AD3A5C",
  width: 45,
  height: 45,
  alignItems:"center",
  alignContent:'center',
  justifyContent:'center',
},
});