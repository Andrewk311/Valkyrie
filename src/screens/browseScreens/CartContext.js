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
              totalPrice: product.cost
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.cost;
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
            totalPrice: product.cost
        }];
    }
    else { 
        return prevItems.map((item) => {
          if(item.id == id) {
            item.qty--;
            item.totalPrice -= product.cost;
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

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, removeItemFromCart}}>
      {props.children}
    </CartContext.Provider>
  );
}