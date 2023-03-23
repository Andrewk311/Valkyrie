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
      console.log(data.data.status)
      setOrderStatus(data.data.status); // Update orderStatus based on received message
    };

    ws.onerror = (error) => {
      console.error('Websocket error:', error);
    };

    ws.onclose = (event) => {
      console.log("WebSocket closed:", event);
    };

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
