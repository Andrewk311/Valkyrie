import React, { createContext, useState, useEffect } from 'react';

export const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
    const [websocket, setWebsocket] = useState(null);

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

            // if(message.action==="orderStatusUpdate" && message.data.status === "Order Delivered"){
            //   updateOrder()
            // }

            window.location.reload();
            // console.log(message);
        }

        return () => {
            if (ws) {
                ws.close();
            }
        };
    }, []);

    return (
        <WebSocketContext.Provider value={{ websocket, setWebsocket }}>
            {children}
        </WebSocketContext.Provider>
    );

};