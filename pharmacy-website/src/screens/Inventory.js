import './Inventory.css';
import { getInventoriesByPartitionKey } from './../services/ListInventories';
import { useState, useEffect } from 'react';
import { addInventoryItem } from './../services/addInventory';

function Inventory() {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        async function fetchInventories() {
          try {
            const filter = 'Cold and Flu'; 
            const items = await getInventoriesByPartitionKey(filter);
            setInventories(items);
          } catch (err) {
            console.log('Error fetching inventories', err);
          }
        }
        fetchInventories();
      }, []);

      function checkInventory(){
        console.log(inventories)
      }

      async function addInventory(){
        try{
            const input = {
                product_inventory: 10,
                product_name: 'something',
                product_type: 'some type',
                product_price: 24.1,
                product_weight: 1.3,
            };
            addInventoryItem(input);
        } catch (err) {
            console.log('Error adding to inventory', err);
        }
      }

    return (
        <div className="App">
            <div className='App-header'>
              <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
              <p style={{ color:'#92989B', fontWeight: 'normal', whiteSpace:'pre-line', textAlign:'center', marginTop:'5px'}}>Inventory</p>
              </p>
            </div>
            <img className='image' src={require('./../logo.png')}></img>
            <button onClick={checkInventory}>check</button>
            <button onClick={addInventory}>add</button>
        </div>
    );
}

export default Inventory;