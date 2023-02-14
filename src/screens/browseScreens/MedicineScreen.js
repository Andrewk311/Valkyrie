import { useEffect, useState, useContext} from "react";
import { View, Button} from "react-native";
import { FlatList, StyleSheet } from 'react-native';
import * as React from 'react';
import { Product } from "../../components/Product";
import { getProducts } from "../../services/ProductsService";
import { CartContext } from "./CartContext";


const Medicine = (props) => {
  const { addItemToCart, getItemsCount } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  function onAddToCart(productId) {
    addItemToCart(productId);
  }

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {onAddToCart(product.id)}}
      />
    );
  }

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