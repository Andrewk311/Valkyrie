import './Inventory.css';
import { getInventoriesByPartitionKey } from './../services/ListInventories';
import { useState, useEffect } from 'react';
import { addInventoryItem } from './../services/addInventory';
import Select from "react-dropdown-select";

function Inventory() {
    const [inventories, setInventories] = useState([]);
    const [name, SetName] = useState("");
    const [price, SetPrice] = useState(0);
    const [inventory, SetInventory] = useState(0);
    const [weight, SetWeight] = useState(0);
    const [type, SetType] = useState("");
    const [selectedType, SetSelectedType] = useState("");
    const itemTypes = [
      {
        id:1,
        name:"Prescription"
      },
      {
        id:2,
        name:"Cold and Flu"
      },
      {
        id:3,
        name:"OTC" 
      },
      {
        id:4,
        name:"Vitamin and Immune Support" 
      },
      {
        id:4,
        name:"Misc." 
      },
    ];
    useEffect(() => {
        async function fetchInventories() {
          try {
            const filter = 'Testing'; 
            const items = await getInventoriesByPartitionKey(filter);
            setInventories(items);
            console.log(items);
          } catch (err) {
            console.log('Error fetching inventories', err);
            setInventories([]);
          }
        }
        fetchInventories();
      }, []);

      function checkInventory(){
        console.log(inventories)
      }

      async function addInventory(name,price,inventory, weight, type ){
        try{
          console.log('add')

            const input = {
                product_name: name,
                product_price: parseFloat(price),
                product_inventory:parseInt(inventory),
                product_weight: parseFloat(weight),
                product_type: type,
            };
            addInventoryItem(input);
            console.log('added item');
        } catch (err) {
            console.log('Error adding to inventory', err);
        }
      }
    //MAKE TABLE THAT HOLDS DATA ABOUT ALL MEDICATIONS. ADD PAGINATION AS WELL SHOULD BE EASY WITH THIS LIBRARY
    return (
        <div className="App">
            <div className='App-header'>
              <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
              </p>
            </div>
            <p style={{color:'#FFFFFF', alignSelf:'flex-start' , marginLeft: 20,fontSize: 'calc(25px + 2vmin)', fontWeight:'bold', marginTop:30, marginBottom:15}}>Inventory</p>
            <hr style={{border:'1px solid white', width: '98%'}}></hr>
            <table className='tableWrapper'>
            <tbody>
      <tr key={"header"}>
        <th className='th'>Product Name</th>
        <th className='th'>Product Price</th>
        <th className='th'> Product Inventory</th>
        <th className='th'>Product Weight</th>
        <th className='th'>Product Type</th>
      </tr>
      {inventories.map((item) => (
        <tr key={item.id}>
          <td className='td'>{item['product_name']}</td>
          <td className='td'>{item['product_price']}</td>
          <td className='td'>{item['product_inventory']}</td>
          <td className='td'>{item['product_weight']}</td>
          <td className='td'>{item['product_type']}</td>
        </tr>
      ))}
      </tbody>
    </table>
    <form>
  <label className='label'>
    Product Name:
    <input type="text" id="product_name" onChange={e => SetName(e.target.value)} required />
  </label>
  <label className='label'>
    Product Price:
    <input type="number" step="0.01" id="product_price" onChange={e => SetPrice(e.target.value)} required />
  </label >
  <label className='label'>
    Product Inventory:
    <input type="number" id="product_inventory" onChange={e => SetInventory(e.target.value)} required />
  </label >
  <label className='label'>
    Product Weight:
    <input type="number" step="0.01" id="product_weight" onChange={e => SetWeight(e.target.value)} required/>
  </label>
  <label className='label'>
    Product Type:
    <input type="text" id="product_type" onChange={e => SetType(e.target.value)} required />
  </label>
  <br></br>
  <input type="Submit" value="Add" 
      onClick={
        addInventory(name, price, inventory, weight, type)

      }/>
</form>
        </div>
    );
}

export default Inventory;