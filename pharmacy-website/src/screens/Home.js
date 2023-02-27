import dog from './../dallas2.JPG';
import './Home.css';
import {Auth} from 'aws-amplify';
import { withAuthenticator, Button, Authenticator, useAuthenticator, ScrollView } from '@aws-amplify/ui-react';
import {useNavigate} from 'react-router-dom';

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
        <div className="App">
            <div className='App-header'>
                <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
                <p style={{ color:'#92989B', fontWeight: 'normal', whiteSpace:'pre-line', textAlign:'center', marginTop:'5px'}}>Welcome to the Pharmacy Portal</p>
                </p>
            </div>
                <img className='image' src={require('./../logo.png')}></img>
                <button onClick={handleOrdersClick} className="button">View Orders</button>
                <button onClick={handleInventoryClick} className="button">View Inventory</button>
                <button onClick={signOut} className="button">Sign Out</button>
            </div>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App,true);
