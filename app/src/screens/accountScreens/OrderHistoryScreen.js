import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { FlatList, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { fetchOrderHistoryByEmail } from '../../services/listOrderHistory';
import { Auth } from 'aws-amplify';
import { Order } from "../../components/Order";

  
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

  function renderProduct({item: order}) {
    return (
      <Order {...order}
      />
    );
  }

  return (
    <View style={{backgroundColor:"rgba(227,55,55,1)"}}>
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.name}
      data={orderHistory}
      renderItem={renderProduct}
    />
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

const styles = StyleSheet.create({
  productsListContainer: {
    backgroundColor:"rgba(227,55,55,1)",
    height:100,
    alignItems:'center',
  },

});