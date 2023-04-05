import { useEffect, useState, useContext} from "react";
import { View, Button} from "react-native";
import { FlatList, StyleSheet } from 'react-native';
import * as React from 'react';
import { Product } from "../../components/Product";
import { getProducts } from "../../services/ProductsService";
import { CartContext } from "./CartContext";
import { getAllInventory, getInventoriesByPartitionKey } from '../../services/ListInventories';
import { API } from 'aws-amplify';
  
const OTC = (props) => {
  const { addItemToCart, getItemsCount } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    async function fetchInventories() {
      try {
        const filter = 'OTC'; 
        const items = await getInventoriesByPartitionKey(filter);
        setInventories(items);
        setProducts(items);
        console.log(items[1]);
      } catch (err) {
        console.log('Error fetching inventories', err);
      }
    }
    fetchInventories();
  }, []);

  function onAddToCart(productId) {
    addItemToCart(productId);
    console.log(inventories)
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

OTC.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'OTC Products',
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

export default OTC;
const styles = StyleSheet.create({
  productsListContainer: {
    backgroundColor:"rgba(227,55,55,1)",
    alignItems:'center',
  },

});