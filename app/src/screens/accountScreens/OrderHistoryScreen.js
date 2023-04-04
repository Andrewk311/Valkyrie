import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { fetchOrderHistoryByEmail } from '../../services/listOrderHistory';
import { Auth } from 'aws-amplify';

  
const OrderHistory = (props) => {

  const [orderHistory, setOrderHistory] = useState([]);
  const [email, setEmail] = useState('');

  //gets email for auth user
  useEffect(() => {
    async function getUserInfo() {
      const user = await Auth.currentAuthenticatedUser();
      setEmail(user.attributes.email);
    }
    getUserInfo();
  }, []);

  //stores the order history for that user after the first useEffect goes through
  useEffect(() => {
    async function getOrderHistoryByEmail() {
      try {
        const filter = email; 
        const items = await fetchOrderHistoryByEmail(filter);
        setOrderHistory(items);
        console.log('works fine: ' + email)
      } catch (err) {
        console.log('Error fetching order history', err);
      }
    }
    getOrderHistoryByEmail();
  }, [email]);

  //testing function
  function checkOrderHistory(){
    console.log(orderHistory);
  }

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: "#006600", fontSize: 40 }}>Order History!</Text>
        <Ionicons name="ios-settings-sharp" size={80} color="#006600" />
        <Button title="checkOrders" onPress={checkOrderHistory}></Button>  
      </View>
    );
  };

OrderHistory.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'History',
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

export default OrderHistory;