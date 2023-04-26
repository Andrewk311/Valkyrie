import React, { createContext, useState, useEffect } from 'react';
import { Auth, Hub } from 'aws-amplify';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [websocket, setWebsocket] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null); // Add orderStatus state
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function getUserInfo() {
      try{
        const user = await Auth.currentAuthenticatedUser();
        setEmail(user.attributes.email);
      } catch (error){
        console.log(error);
      }
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    const listener = (data) => {
      switch (data.payload.event) {
        case 'signIn':
          setEmail(data.payload.data.attributes.email);
          break;
        case 'signOut':
          setEmail(null);
          break;
        default:
          break;
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  useEffect(() => {

    if(!email){
      return;
    }

    const ws = new WebSocket("wss://07k3svmpdh.execute-api.us-east-1.amazonaws.com/production");

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      setWebsocket(ws);
      console.log(email)

      setTimeout(() => {
        console.log("Sending email message");
        ws.send(JSON.stringify({ type: 'email', email: email }));
      }, 1000); // Add a delay of 1 second before sending the message
    };

    ws.onmessage = (event) => {
      console.log("WebSocket readyState:", ws.readyState);
      console.log("Message received:", event.data);
      var parsedMessage = JSON.parse(event.data);
      console.log('MESSAGE PARSED: ', parsedMessage);
      console.log('PONG PRINT: ' + parsedMessage.type)
      if (typeof parsedMessage === 'string') {
        parsedMessage = JSON.parse(parsedMessage);
      }
      if (parsedMessage && parsedMessage.action === 'orderStatusUpdate' && parsedMessage.data && parsedMessage.data.status) {
        const status = parsedMessage.data.status;
        const parsedEmail = parsedMessage.data.email;
        console.log(status);
        if(parsedEmail === email){
          setOrderStatus(status); // Update orderStatus based on received message
        }
      } else if (parsedMessage.type === 'pong') {  //pong doesnt work yet.
        console.log('Received pong message');
      } else {
        console.error('Unexpected message format:', event.data);
      }
    };

    ws.onerror = (error) => {
      console.error('Websocket error:', error);
    };

    ws.onclose = (event) => {
      console.log("WebSocket closed:", event);
    };

    const pingInterval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        console.log("sending 'ping' message")
        ws.send(JSON.stringify({ type: 'ping' }));
      } else {
        console.log("Skipping ping")
      }
    }, 60000);

    return () => {
      if (ws) {
        ws.close();
      }
    }; 
  }, [email]);

  return (
    <WebSocketContext.Provider value={{ websocket, setWebsocket, orderStatus, setOrderStatus }}>
      {children}
    </WebSocketContext.Provider>
  );
};
