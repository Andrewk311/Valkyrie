import './Orders.css';
import { getOrdersByNumber } from './../services/ListOrders';
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { updateOrder } from './../services/updateOrderDetails';

function Orders() {

    const [orders, setOrders] = useState([]);
    const [name, SetName] = useState("");
    const [price, SetPrice] = useState(0);
    const [inventory, SetInventory] = useState(0);
    const [weight, SetWeight] = useState(0);
    const [message, setMessage] = useState('');
    const [type, setType] = useState("");
    const [websocket, setWebsocket] = useState(null);


    useEffect(() => {
      const ws = new WebSocket('wss://07k3svmpdh.execute-api.us-east-1.amazonaws.com/production');
  
      ws.onopen = () => {
        console.log('Connected to WebSocket');
        setWebsocket(ws);
      };
  
      ws.onclose = () => {
        console.log('WebSocket closed');
      };
  
      return () => {
        if (ws) {
          ws.close();
        }
      };
    }, []);
  
    const sendOrderStatusUpdate = (status) => {
      if (websocket && websocket.readyState === WebSocket.OPEN) {
        websocket.send(JSON.stringify({ "action": 'orderStatusUpdate', "data": { "status": status}}));
        console.log('Order status updated (hopefully)');
      }
    };

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
        async function fetchOrder() { //can change this to any order greater than 0 to list all. Can also show active orders only if thats what you want lmk
          try {
            const filter = "1"; //for now leaving it to just show one order but easy change for the other thing.
            const items = await getOrdersByNumber(filter);
            setOrders(items);
            console.log(items); //transit and accepted fields are in here too idk how to add that to the table, but i added the columns for it. Order status and transit are prob the same thing.
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
      //here we need to add query to gather the location data from that specific order and insert it into the body of the lambda function, then call that.
    }
     
    function declineOrder(order){

    }

    async function updateOrderDetails(){    //currently only updates based on the values here when you press the button.
      var orderNumber = 1;
      var isAccepted = 0;
      var inTransit = false;
      try {
        updateOrder(orderNumber, isAccepted, inTransit);
      } catch (err) {
          console.log('error updating inventory: ', err);
      }
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
        <th className='th'>Order Status</th>
        <th className='th'>Order Location</th>
        <th className='th'>Order Details</th>
        <th className='th'>Order Specification</th>
        <th className='th'>Approval Status</th>
        <th className='th'>Transit Status</th>
      </tr>
      {orders.map((order) => (
        <tr key={order.id}>
          <td className='td'>{order['order_number']}</td> 
          <td className='td'>{order['email']}</td>
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
            <button onClick={updateOrderDetails}>Update Order 1</button>
            <button onClick={() => sendOrderStatusUpdate('Order Confirmed')}>Confirm Order</button>
            <button onClick={() => sendOrderStatusUpdate('Order Shipped')}>Ship Order</button>
        </div>
    );
}

export default Orders;