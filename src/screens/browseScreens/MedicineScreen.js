import { useEffect, useState, useContext } from "react";
import { Text, View, Button, Dimensions, TouchableOpacity, Image} from "react-native";
import { ScrollView, FlatList, StyleSheet } from 'react-native';
import * as React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Product } from "../../components/Product";
import { getProducts } from "../../services/ProductsService";
import { CartContext } from "./CartContext";


const Medicine = (props) => {
  /* broken line --> const { addItemToCart } = useContext(CartContext);
  */

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {props.navigation.navigate('FirstAidCare')}
      }
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (
    <View style={{backgroundColor:"rgba(227,55,55,1)"}}>
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id}
      data={products}
      renderItem={renderProduct}
    />
    </View>
  );
  };

Medicine.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Cold/Flu Medicine',
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

export default Medicine;
const styles = StyleSheet.create({
  productsListContainer: {
    backgroundColor:"rgba(227,55,55,1)",
    alignItems:'center',
  },

});