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
