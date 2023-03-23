import React, { createContext, useState } from 'react';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const [websocket, setWebsocket] = useState(null);

  return (
    <WebSocketContext.Provider value={{ websocket, setWebsocket }}>
      {children}
    </WebSocketContext.Provider>
  );
};
