import dog from './dallas2.JPG';
import './App.css';
import {Authenticator, Theme, ThemeProvider} from '@aws-amplify/ui-react';
import Amplify from '@aws-amplify/core';
import config from './aws-exports'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Orders from './screens/Orders'
import Inventory from './screens/Inventory'
import Home from './screens/Home'

Amplify.configure(config)

const theme = {
  name: 'My Custom Theme',
  tokens: {
    colors: {
      primary: '#007bff',
      secondary: '#6c757d',
    },
    components: {
      button: {
        fontWeight: 'bold',
        borderRadius: '9999px',
        padding: '10px 20px',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: {
          value: 'var(--amplify-colors-primary)',
        },
        backgroundColor: {
          value: 'var(--amplify-colors-primary)',
        },
        color: {
          value: 'var(--amplify-colors-white)',
        },
        _hover: {
          backgroundColor: {
            value: 'var(--amplify-colors-primary-800)',
          },
        },
        _focus: {
          backgroundColor: {
            value: 'var(--amplify-colors-primary-800)',
          },
        },
      },
    },
  },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/orders" element={<Orders />} />
        <Route path ="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
