import { useEffect, useState, useContext} from "react";
import { View, Button} from "react-native";
import { FlatList, StyleSheet } from 'react-native';
import * as React from 'react';
import { Product } from "../../components/Product";
import { getProducts } from "../../services/ProductsService";
import { CartContext } from "./CartContext";
import { getAllInventory, getInventoriesByPartitionKey } from './../../services/ListInventories';
import { API } from 'aws-amplify';
  
const ImmuneSupport = (props) => {
  const { addItemToCart, getItemsCount } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    async function fetchInventories() {
      try {
        const filter = 'Vitamins & Immune Support'; 
        const items = await getInventoriesByPartitionKey(filter);
        setInventories(items);
      } catch (err) {
        console.log('Error fetching inventories', err);
      }
    }
    fetchInventories();
  }, []);

  function onAddToCart(product) {
    addItemToCart(product);
  }

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {onAddToCart(product)}}
      />
    );
  }

  return (
    <View style={{backgroundColor:"rgba(227,55,55,1)"}}>
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.name}
      data={inventories}
      renderItem={renderProduct}
    />
    </View>
    );
  };

ImmuneSupport.navigationOptions = ({ navigation: { goBack } }) => {
    return  {
      title: 'Immune Support',
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

export default ImmuneSupport;
const styles = StyleSheet.create({
  productsListContainer: {
    backgroundColor:"rgba(227,55,55,1)",
    alignItems:'center',
  },

});