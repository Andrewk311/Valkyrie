import React, { createContext, useState, useEffect } from 'react';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [websocket, setWebsocket] = useState(null);
  const [orderStatus, setOrderStatus] = useState(null); // Add orderStatus state

  useEffect(() => {
    const ws = new WebSocket("wss://07k3svmpdh.execute-api.us-east-1.amazonaws.com/production");

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      setWebsocket(ws);
    };

    ws.onmessage = (event) => {
      console.log("WebSocket readyState:", ws.readyState);
      console.log("Message received:", event.data);
      const data = JSON.parse(event.data);
      if (data.hasOwnProperty('data') && data.data.hasOwnProperty('status')) {
        console.log(data.data.status);
        setOrderStatus(data.data.status); // Update orderStatus based on received message
      } else if (data.type === 'pong') {
        console.log('Received pong message');
      } else {
        console.error('Unexpected message format:', data);
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
    }, 20000); // Ping every 20 seconds

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  return (
    <WebSocketContext.Provider value={{ websocket, setWebsocket, orderStatus, setOrderStatus }}>
      {children}
    </WebSocketContext.Provider>
  );
};
