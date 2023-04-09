import React from 'react';
import { Button } from "react-native";
import {Text, Image, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export function Order({order_number, isAccepted, orders, orderSpecification}) {
  return (
    <View style={styles.category}>
            <View style={{width:'100%', marginLeft:16, marginTop:10}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginRight:90,}}>
                        <Text style={styles.orderNumber}>Order: {order_number}</Text>
                        <Text style={styles.quantity}>Different Product(s) purchased: {orders.length}</Text>
                        <Text style={{fontSize:20}}>Status: {isAccepted ? 'Approved' : 'Denied'}</Text>
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.totalPrice}>${orderSpecification['totalPrice']}</Text>
                    </View>

                </View>
            </View>
            </View>
  );
}
const styles = StyleSheet.create({
    category: {
        backgroundColor: "white",
        borderRadius:0,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width*(0.3),
        marginTop:10,
        alignContent:'center',
        flexDirection:'row',
    },
    orderNumber:{
        marginTop:10,
        color:"black",
        fontSize:25,
        fontFamily:'Avenir',
        fontWeight:'bold',
    }, 
    quantity:{
        marginTop:10,
        marginBottom:10,
    },
    totalPrice:{
        fontSize:20,
    }
});