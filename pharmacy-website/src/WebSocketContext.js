import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    const [websocket, setWebsocket] = useState(null);
    const location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => setShowPopup(!showPopup);

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

            // Show popup when a new order is received
            var message2 = JSON.parse(message);
            if (message2.data.status === 'Order Placed') {
                console.log('This works');
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 5000); // Hide popup after 5 seconds
            }

            if (location.pathname === '/orders') {
                window.location.reload();
            }

        }

        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, [location]);

    return (
        <>
            {showPopup && (
                <Popup message="A new order has been placed."/>
            )}
            <WebSocketContext.Provider value={{ websocket, setWebsocket }}>
                {children}
            </WebSocketContext.Provider>
        </>
    );

};

const Popup = ({ message }) => (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1rem',
        background: 'green',
        color: 'white',
        textAlign: 'center',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );