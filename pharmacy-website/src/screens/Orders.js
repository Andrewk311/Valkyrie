import './Orders.css';
import { getOrdersByNumber } from './../services/ListOrders';
import { useEffect, useState } from 'react';

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrder() {
          try {
            const filter = "9"; 
            const items = await getOrdersByNumber(filter);
            setOrders(items);
            console.log(items);
          } catch (err) {
            console.log('Error fetching orders', err);
            setOrders([]);
          }
        }
        fetchOrder();
      }, []);

    function handleShowOrderClick(){
        console.log(orders)
    }


    return (
        <div className="App">
            <div className='App-header'>
                <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
                <p style={{ color:'#92989B', fontWeight: 'normal', whiteSpace:'pre-line', textAlign:'center', marginTop:'5px'}}>ORDERS</p>
                </p>
            </div>
            <button onClick={handleShowOrderClick}>Show Order</button>
            <img className='image' src={require('./../logo.png')}></img>
        </div>
    );
}

export default Orders;