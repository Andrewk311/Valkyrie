import './App.css';
import {
  LandingPage 
 } from './ui-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import How from './screens/How';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/AboutUs" element={<AboutUs />} />
        <Route path ="/HowitsBuilt" element={<How />} />
      </Routes>
    </BrowserRouter>
  );
}

 

export default App;
