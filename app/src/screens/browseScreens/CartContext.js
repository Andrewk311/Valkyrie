import React, {createContext, useState} from 'react';
import { getProduct } from '../../services/ProductsService';
export const CartContext = createContext();

export function CartProvider(props) {
  
  const [items, setItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState("0");

  function addItemToCart(product) {
    setItems((prevItems) => {
      console.log(prevItems);
      console.log('product is: ' + product.name)
      const item = prevItems.find((item) => (item.name == product.product_name)); //ISSUE IS THE OBJECT IS DIFFERENT WHEN ADDING FROM MEDICINE SCREEN AND ADDING FROM CART SCREEN
      
      if (item) {console.log('ITEM IS: ' + item.name)}
      if(!item) {
          return [...prevItems, {
              name: product.product_name,
              qty: 1,
              product,
              totalPrice: product.product_price,
              totalWeight: product.product_weight
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.name == product.product_name) {
              item.qty++;
              item.totalPrice += product.product_price;
              item.totalWeight += product.product_weight;
            }
            return item;
          });
      }
    });
}

function addExtraItemInCart(product) {
  setItems((prevItems) => {
    console.log(prevItems);
    console.log('product is: ' + product.name)
    const item = prevItems.find((item) => (item.name == product.name)); //ISSUE IS THE OBJECT IS DIFFERENT WHEN ADDING FROM MEDICINE SCREEN AND ADDING FROM CART SCREEN
    
    if (item) {console.log('ITEM IS: ' + item.name)}
    if(!item) {
        return [...prevItems, {
          name:product['product_name'],
          qty: 1,
          product,
          totalPrice: product['product_price'],
          totalWeight: product['product_weight']
        }];
    }
    else { 
        return prevItems.map((item) => {
          if(item.name == product.name) {
            item.qty++;
            item.totalPrice += product.product.product_price;
            item.totalWeight += product.product.product_weight;
          }
          return item;
        });
    }
  });
}

function removeItemFromCart(product) {
  setItems((prevItems) => {
    console.log(prevItems);
    console.log('product is: ' + product.name)
    const item = prevItems.find((item) => (item.name == product.name));
    console.log('ITEM IS: ' + item.name)
    if(!item) {
        return [...prevItems, {
            name:product['product_name'],
            qty: 1,
            product,
            totalPrice: product['product_price'],
            totalWeight: product['product_weight']
        }];
    }
    else { 
        return prevItems.map((item) => {
          if(item.name == product.name) {
            item.qty--;
            item.totalPrice -= product.product.product_price;
            item.totalWeight -= product.product.product_weight;
          }
          return item;
        });
    }
  });
}
function getItemsCount() {
  return items.reduce((sum, item) => (sum + item.qty), 0);
}

function getTotalPrice() {
  return items.reduce((sum, item) => (sum + item.totalPrice), 0);
}  

function getTotalWeight() {
  return items.reduce((sum, item) => (sum + item.totalWeight), 0);
}  

function setLatestOrderNumber(orderNumberInput){
  console.log('ORDER NUMBER INPUT!!: ' + orderNumberInput);
  setOrderNumber(orderNumberInput);
}

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, getTotalWeight, setLatestOrderNumber, removeItemFromCart, orderNumber, addExtraItemInCart}}>
      {props.children}
    </CartContext.Provider>
  );
}