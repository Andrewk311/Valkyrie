import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
export function Product({product_inventory, product_name, product_price, product_type, onPress}) {
    var maps = {
    "Accutane": require("./../ProductImages/Accutane.png"),
    "Advil": require("./../ProductImages/Advil.png"),
    "Afrin": require("./../ProductImages/Afrin.png"),
    "Albuterol": require("./../ProductImages/Albuterol.png"),
    "Ashwagandha": require("./../ProductImages/Ashwagandha.png"),
    "Bandages": require("./../ProductImages/Bandages.png"),
    "Benadryl": require("./../ProductImages/Benadryl.png"),
    "Covid Test": require("./../ProductImages/CovidTest.png"),
    "Excederin": require("./../ProductImages/Excederin.png"),
    "Isopropyl": require("./../ProductImages/Isopropyl.png"),
    "Lipitor": require("./../ProductImages/Lipitor.png"),
    "Motrin": require("./../ProductImages/Motrin.png"),
    "Omega-3 Fish Oil": require("./../ProductImages/Omega-3FishOil.png"),
    "Tylenol": require("./../ProductImages/Tylenol.png"),
    "Vicodin": require("./../ProductImages/Vicodin.png"),
    "Vitamin D": require("./../ProductImages/VitaminD.png"),
    "Xanax": require("./../ProductImages/Xanax.png"),
  };
  return (
    <View style={styles.category}>
            <Image style={styles.tinyLogo} source={maps[product_name]}/>
            <View style={{padding:40, alignItems:'center', width:250,}}>
            <Text style={styles.productTitle}>{product_name}</Text>
            <Text style={{fontSize:20, marginTop:10}}>${product_price}</Text>
            <TouchableOpacity style={styles.cartBtn} onPress={onPress} >
              <Ionicons name="cart" size={30} color="white" style={styles.cart}/>
              <Text style={{color:"white", fontSize:20}}>Add to Cart</Text>
            </TouchableOpacity>
            </View>
            </View>
  );
}
const styles = StyleSheet.create({
    category: {
        backgroundColor: "white",
        borderRadius:12,
        width:Dimensions.get('window').width*(0.96),
        height:Dimensions.get('window').width*(0.6),
        marginTop:10,
        alignItems:'center',
        flexDirection:'row',
        marginBottom:10,
    },
    rowContainer:{
        flexDirection: 'row',
    },
    cartBtn: {
        marginTop:8,
        backgroundColor:"#AD3A5C",
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        borderRadius:10,
        width:150,
    },
    tinyLogo:{
        width: 125,
        height: 150,
        marginTop:5,
        borderRadius:10,
        resizeMode:'stretch',
        marginLeft:15,
    },
    productTitle:{
        marginTop:10,
        color:"black",
        fontSize:20,
        fontFamily:'Avenir',
        fontWeight:'bold',
    }, 
});