import React, {createContext, useState} from 'react';
import { getProduct } from '../../services/ProductsService';
export const CartContext = createContext();

export function CartProvider(props) {
  
  const [items, setItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState("0");

  function addItemToCart(product) {
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.name == product['product_name']));
      if(!item) {
          return [...prevItems, {
              name: product['product_name'],
              qty: 1,
              product,
              totalPrice: product['product_price'],
              totalWeight: product['product_weight']
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.name == product['product_name']) {
              item.qty++;
              item.totalPrice += product['product_price'];
              item.totalWeight += product['product_weight'];
            }
            return item;
          });
      }
    });
}

function removeItemFromCart(product) {
  setItems((prevItems) => {
    const item = prevItems.find((item) => (item.name == product['product_name']));
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
          if(item.name == name) {
            item.qty--;
            item.totalPrice -= product['product_price'];
            item.totalWeight -= product['product_weight'];
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
  setOrderNumber(orderNumberInput);
}

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, getTotalWeight, setLatestOrderNumber, removeItemFromCart}}>
      {props.children}
    </CartContext.Provider>
  );
}