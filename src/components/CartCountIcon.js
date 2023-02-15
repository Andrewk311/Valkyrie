import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from '../screens/browseScreens/CartContext';
import { Ionicons } from "@expo/vector-icons";

export function CartCountIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);
  return (
    <View style={styles.container}>
       <Ionicons name="cart" size={20} color="#000000"/>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('CartSummary');
        }}
      >Cart ({getItemsCount()})</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft:4,
  },
});