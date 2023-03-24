import React, {createContext, useState} from 'react';
import { getProduct } from '../../services/ProductsService';
export const CartContext = createContext();

export function CartProvider(props) {
  
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.cost,
              totalWeight: product.weight
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.cost;
              item.totalWeight += product.weight;
            }
            return item;
          });
      }
    });
}

function removeItemFromCart(id) {
  const product = getProduct(id);
  setItems((prevItems) => {
    const item = prevItems.find((item) => (item.id == id));
    if(!item) {
        return [...prevItems, {
            id,
            qty: 1,
            product,
            totalPrice: product.cost,
            totalWeight: product.weight
        }];
    }
    else { 
        return prevItems.map((item) => {
          if(item.id == id) {
            item.qty--;
            item.totalPrice -= product.cost;
            item.totalWeight -= product.weight;
            if(item.qty == 0){
              prevItems.splice(prevItems.indexOf(item), 1);
            }
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

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, getTotalWeight, removeItemFromCart}}>
      {props.children}
    </CartContext.Provider>
  );
}