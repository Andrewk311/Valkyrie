import './Orders.css';
import { getOrdersByNumber } from './../services/ListOrders';
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';

function Orders() {

    const [orders, setOrders] = useState([]);
    const [name, SetName] = useState("");
    const [price, SetPrice] = useState(0);
    const [inventory, SetInventory] = useState(0);
    const [weight, SetWeight] = useState(0);
    const [message, setMessage] = useState('');
    const [type, setType] = useState("");

    const testLambda = async () => {
      try {
        const response = await API.post('lambdatrigger', '/test', {
          body: {
            "latitude": 37.7749,
            "longitude": -122.4194
          }
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

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

    function approveOrder(order){

    }
     
    function declineOrder(order){

    }


    return (
      <div className="App">
      <div className='App-header'>
        <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
        </p>
      </div>
      <p style={{color:'#FFFFFF', alignSelf:'flex-start' , marginLeft: 20,fontSize: 'calc(25px + 2vmin)', fontWeight:'bold', marginTop:30, marginBottom:15}}>Orders</p>
      <hr style={{border:'1px solid white', width: '98%'}}></hr>
            <table className='tableWrapper'>
            <tbody>
      <tr key={"header"}>
        <th className='th'>Order Number</th>
        <th className='th'>Email</th>
        <th className='th'> Order Status</th>
        <th className='th'>Order Location</th>
        <th className='th'>Order Details</th>
        <th className='th'>Order Specification</th>
        <th className='th'>Approval Status</th>
      </tr>
      {orders.map((order) => (
        <tr key={order.id}>
          <td className='td'>{order['order_number']}</td> 
          <td className='td'>{order['email']}</td>
          <td className='td'>{order['isActive']? <div>In Progress</div> : 'Completed'}</td>
          <td className='td'>Latitude: {order['location']['latitude']}<br></br><br></br>longitude: {order['location']['longitude']}</td>
          <td className='td'>
            {order['orders'].map(function(d, idx){
              return (<p key={idx}>{d.name + " x " + d.quantity}</p>)})}</td>
        <td className='td'>Total Price: {order['orderSpecification']['totalPrice']}<br></br><br></br>Total Weight: {order['orderSpecification']['totalWeight']}</td>
        <td className='td'>{ false ? <td><button onClick={approveOrder(order)}>Approve</button><button onClick={declineOrder(order)}>Decline</button></td> : 'PASS' }</td>
        </tr>
      ))}
      </tbody>
    </table>
<h2>{message}</h2>
            <button onClick={testLambda}>Trigger Lambda</button>
        </div>
    );
}

export default Orders;