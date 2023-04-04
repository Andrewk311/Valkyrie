import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from "react-native";
import { CartContext } from '../browseScreens/CartContext';
import { getProduct } from '../../services/ProductsService';
import { Ionicons } from "@expo/vector-icons";
import { Auth } from 'aws-amplify';
import { createOrder } from '../../services/AddOrder';
import Geocoder from 'react-native-geocoding';
import { WebSocketContext } from '../../WebSocketContext';

const CartSummary = (props) => {
    const {items, removeItemFromCart, getTotalPrice, addItemToCart, setLatestOrderNumber, getTotalWeight } = useContext(CartContext);
    const [attributes, setAttributes] = React.useState(null);
    const { websocket, setWebsocket } = useContext(WebSocketContext);
    const [email, setEmail] = React.useState('');
    // const {address, setAddress} = React.useState('');
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');

    React.useEffect(() => {   //address given address field to the auth user. Need to move to different file.
      async function getUserInfo() {
        const user = await Auth.currentAuthenticatedUser();
        setAttributes(user);
      }
      getUserInfo(); 
    }, []);

    // will remove this eventually 
    // var email = ''
    // var address = ''
    React.useEffect(() => {
      if (attributes == null) {
        console.log('null attributes');
      } else {
        console.log(attributes.attributes.email);
        console.log(attributes.attributes.address);
        setEmail(attributes.attributes.email.toString()); //gets email
        if (attributes.attributes.address != null) {
          setLatitude(attributes.attributes['custom:latitude'].toString()); //gets lat
          setLongitude(attributes.attributes['custom:longitude'].toString());
          console.log(latitude);
        }
      }
    }, [attributes]);

    // checkout functions
    const [errorMessage, setErrorMessage] = React.useState("");
    const checkoutAction = (message) => {
      if (message == 'Order Sent!'){
        if(latitude == '' || longitude == ''){
          setErrorMessage('Missing Delivery Address, Head to Account Settings!')
        }else{
          createOrderObject();
        }
      }
    }

    function createOrderObject(){
      const orderDetails = [];
      if(items.length == 0){
        setErrorMessage("Cart is Empty, Please add items to checkout.");
      }
      else{
        for(var i =0; i < items.length; i++){
          if (items[i].qty){
            orderDetails.push({name:getProduct(items[i].id).name, quantity: items[i].qty});
          }
        }
        const orderData = {
          latitude: latitude,
          longitude: longitude,
          totalPrice: getTotalPrice().toFixed(2),
          totalWeight: getTotalWeight().toFixed(2),
          email: email,
          //orderNumber: "AD" +  Math.floor(Math.random()*100000+1).toString(),  //change every order or it wont go through
          orderNumber: "AK67174",
          inTransit : false,
          isAccepted: 0,
          isActive: true,
          orders: orderDetails,
        };
        console.log("lat: ",latitude)
        addOrder(orderData);
      }
    }

    

    async function addOrder(order){
      try{
        createOrder(order);
        console.log('added order number #' + order.orderNumber);
        onSetLatestOrderNumber(order.orderNumber);
        setErrorMessage('Order Placed!');
        if (!websocket || websocket.readyState !== WebSocket.OPEN) {
          const ws = new WebSocket('wss://07k3svmpdh.execute-api.us-east-1.amazonaws.com/production');
          ws.addEventListener('open', () => {
            console.log('WebSocket connection opened');
            ws.send(JSON.stringify({ "action": "orderStatusUpdate", "data": { "status": "Order Placed" }}));
          });
          setWebsocket(ws);
        } else {
          console.log('ANYTHING PLEASE');
          var test = { "action": "orderStatusUpdate", "data": { "status": "Order Placed" }};
          websocket.send(JSON.stringify(test));
        }
      } catch (err) {
        console.log('Error adding order', err);
      }
    }

    // add/remove items from cart
    function onAddToCart(productId) {
      addItemToCart(productId);
    }

    function onRemoveFromCart(productId) {
      removeItemFromCart(productId);
    }

    function onSetLatestOrderNumber(orderNumber) {
      setLatestOrderNumber(orderNumber);
    }

  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={styles.cartLineTotal}>
        <View style={{flexDirection:'row', marginTop:10, marginBottom:10}}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Total: </Text>
          <Text style={{fontWeight:'bold', fontSize:20}}>${total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style ={styles.checkoutBtn} 
          onPress={() => {checkoutAction((attributes.attributes.address == " ") ? 'Address is Missing, unable to Checkout' : 'Order Sent!')}} >
            <Text style={{fontSize:20, fontWeight:'350'}}>Checkout</Text>
          </TouchableOpacity>
          {errorMessage && <Text style={{fontSize:'15', marginTop:15, }}> {errorMessage} </Text>}
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
    flexDirection: 'column',
    borderTopColor: "#AD3A5C",
    borderTopWidth: 3, 
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    width:380,
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

checkoutBtn: {
  backgroundColor: 'white',
  width: 250,
  height: 75,
  borderWidth: 2,
  fontColor:'black',
  borderRadius: (45 / 2),
  borderColor:"#AD3A5C",
  alignItems:"center",
  justifyContent:'center',
}
});
