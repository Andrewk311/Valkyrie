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
  var isActive = true; // temp var until isActive is made 


  useEffect(() => {
    const ws = new WebSocket('wss://07k3svmpdh.execute-api.us-east-1.amazonaws.com/production');

    ws.onopen = () => {
      console.log('Connected to WebSocket');
      setWebsocket(ws);
      ws.send(JSON.stringify({ type: 'email', email: 'pharmacist' }));
      setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ type: 'ping' }));
          console.log('sent ping');
        }
      }, 60000);  //sends message to websocket every 60 seconds to stay connected. Need to move this code to the home page soon.
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('message received: ', message);

      if (message.type === 'pong') {
        console.log('pong received');
        return;
      }

      window.location.reload();
    }

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const sendOrderStatusUpdate = (status, email) => {
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.send(JSON.stringify({ "action": 'orderStatusUpdate', "data": { "status": status, "email":  email} }));
      console.log('Order status updated (hopefully)');
      window.location.reload();
    }
  };

  useEffect(() => {
    async function fetchOrder() { //can change this to any order greater than 0 to list all. Can also show active orders only if thats what you want lmk
      try {
        const items = await getOrdersByNumber();
        setOrders(items);
        console.log(items); //transit and accepted fields are in here too idk how to add that to the table, but i added the columns for it. Order status and transit are prob the same thing.
      } catch (err) {
        console.log('Error fetching orders', err);
        setOrders([]);
      }
    }
    fetchOrder();
  }, []);

  function handleShowOrderClick() {
    console.log(orders)
  }


  function approveOrder(order) {
    if (order['isAccepted'] == 0) {
      try {
        console.log('approved order')
        updateOrder(order['order_number'], 1, false, true);
        var email = order['email'];
        sendOrderStatusUpdate('Order Confirmed',email); //sends data to app side and will refresh
      } catch (err) {
        console.log('error updating inventory: ', err);
      }
    }
  }

  function declineOrder(order) {
    if (order['isAccepted'] == 0) {
      try {
        console.log('declined order')
        updateOrder(order['order_number'], -1, false, false);
      } catch (err) {
        console.log('error updating inventory: ', err);
      }
    }
  }

  async function inTransit(order) {
    try {
      const payload = {
        latitude: order['location']['latitude'],
        longitude: order['location']['longitude']
      };
      updateOrder(order['order_number'], order['isAccepted'], true, true);
      var email = order['email'];
      console.log(payload);
      const response = await API.post('droneSendCoords', '/droneSend', {
        body: {
          "latitude": payload.latitude,
          "longitude": payload.longitude
        }
      });
      console.log('API Gateway response:', response);
      sendOrderStatusUpdate('Order Shipped', email); //sends data to app side and will refresh 
      // No need to check response.ok and response.json() here, as this is not necessary with AWS Amplify API.post
  
    } catch (err) {
      console.log('error updating transit status: ', err);
      sendOrderStatusUpdate('Order Shipped', email); //sends data to app side and will refresh 
      //probably should just update order status here. Issue with what I did now moving it above is that it goes prematurely. Doesnt wait for coords to send or see if it works.
    }
  }
  



  function isDelivered(order) {
    try {
      updateOrder(order['order_number'], order['isAccepted'], false, false);
      var email = order['email'];
      sendOrderStatusUpdate('Order Delivered', email); //sends data to app side and will refresh
    } catch (err) {
      console.log('error updating inventory: ', err);
    }
  }

  async function updateOrderDetails() {    //currently only updates based on the values here when you press the button.
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
        <p style={{ color: '#92989B', fontWeight: 'bold', whiteSpace: 'pre-line', textAlign: 'center' }}>VALKYRIE{"\n"}
        </p>
      </div>
      <p style={{ color: '#FFFFFF', alignSelf: 'flex-start', marginLeft: 20, fontSize: 'calc(25px + 2vmin)', fontWeight: 'bold', marginTop: 30, marginBottom: 15 }}>Orders</p>
      <hr style={{ border: '1px solid white', width: '98%' }}></hr>
      <div className="table-container">
        <table className="tableWrapper">
          <thead>
            <tr key={"header"}>
              <th className='th'>Order Number</th>
              <th className='th'>Email</th>
              <th className='th'>Order Location</th>
              <th className='th'>Order Status</th>
              <th className='th'>Order Details</th>
              <th className='th'>Approval Status</th>
              <th className='th'>Transit Status</th>
              <th className='th'>Active Status</th>
            </tr>
          </thead>
        </table>
        <div className="table-body-container">
          <table className="tableWrapper">
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className='td'>{order['order_number']}</td>
                  <td className='td'>{order['email']}</td>
                  <td className='td'>Latitude: {order['location']['latitude']}<br></br><br></br>longitude: {order['location']['longitude']}</td>
                  <td className='td'>
                    {order['orders'].map(function (d, idx) {
                      return (<p key={idx}>{d.name + " x " + d.quantity}</p>)
                    })}</td>
                  <td className='td'>Total Price: {order['orderSpecification']['totalPrice']}<br></br><br></br>Total Weight: {order['orderSpecification']['totalWeight']}oz</td>

                  {(order['isActive']) ?
                    (order['isAccepted'] == 0) ?
                      <>
                        <td className='td'><button className='button2' onClick={() => { approveOrder(order) }}>Approve</button>
                          <button className='button2' onClick={() => { declineOrder(order) }}>Decline</button></td>
                        <td className='td'>Awaiting Approval</td>
                      </>
                      :
                      (order['isAccepted'] == 1) ?
                        order['inTransit'] == false ?
                          <><td className='td' >Order Approved</td><td className='td'><button className='button3' onClick={() => { inTransit(order) }}>Trigger Delivery</button></td></>
                          :
                          <><td className='td' >Order Approved</td><td className='td' >In Transit</td></>
                        :
                        ''
                    :
                    <><td className='td' >{order['isAccepted'] == 1 ? 'Accepted' : 'Declined'}</td><td className='td'>False</td></>
                  }

                  {order['isActive'] ?
                    order['inTransit'] ?
                      <td className='td'><button className='button3' onClick={() => { isDelivered(order) }}>Verify Delivery</button></td>
                      :
                      <td className='td'>In Progress</td>
                    :
                    <td className='td'>Completed</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <h2>{message}</h2>
    </div>
  );

}

export default Orders;