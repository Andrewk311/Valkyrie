import dog from './dallas2.JPG';
import './App.css';
import {Auth} from 'aws-amplify';
import { withAuthenticator, Button, Heading, Authenticator, useAuthenticator, AmplifySignOut, ScrollView } from '@aws-amplify/ui-react';
import Amplify from '@aws-amplify/core';
import config from './aws-exports'
import { BrowserRouter, Switch, Route, useNavigate, Routes } from 'react-router-dom';
import Orders from './screens/Orders'
import Inventory from './screens/Inventory'

Amplify.configure(config)

function SignOutButton() {
  console.log('working');
  const { signOut } = useAuthenticator();
  return <Button width='100px' height='100px' color='#000000' title="Sign Out" onPress={signOut} />;
}


const signOut = () => {
  Auth.signOut()
    .then(() => console.log('Signed out'))
    .catch(err => console.log('Error signing out: ', err));
}

function App() {

  const navigate = useNavigate();

  function handleOrdersClick(){
    navigate('/orders')
  }

  function handleInventoryClick(){
    navigate('/inventory')
  }

  return (
    <Authenticator.Provider>
      <Authenticator>
        <BrowserRouter>
          <Routes>
            <Route path="/orders" element={<Orders />}/>
            <Route path="/inventory" element={<Inventory />}>
              {/* render the inventory screen component */}
            </Route>
          </Routes>
          <div className="App">
              <div className='App-header'>
                <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
                <p style={{ color:'#92989B', fontWeight: 'normal', whiteSpace:'pre-line', textAlign:'center', marginTop:'5px'}}>Welcome to the Pharmacy Portal</p>
                </p>
              </div>
              <div className='imageContainer'>
                <img className='image' src={require('./logo.png')}></img>
              </div>
            <div className='buttonContainer'>
                <button onClick={handleOrdersClick} className="button">View Orders</button>
                <button onClick={handleInventoryClick} className="button">View Inventory</button>
                <button onClick={signOut} className="button">Sign Out</button>
            </div>
          </div>
        </BrowserRouter>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App,true);
