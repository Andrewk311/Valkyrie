import dog from './dallas2.JPG';
import './App.css';
import {Auth} from 'aws-amplify';
import { withAuthenticator, Button, Heading, Authenticator, useAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify from '@aws-amplify/core';
import config from './aws-exports'

Amplify.configure(config)

function SignOutButton() {
  console.log('working');
  const { signOut } = useAuthenticator();
  return <Button width='100px' height='100px' color='#000000' title="Sign Out" onPress={signOut} />;
}

// signOut = () => {
//   Auth.signOut()
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// }
const signOut = () => {
  Auth.signOut()
    .then(() => console.log('Signed out'))
    .catch(err => console.log('Error signing out: ', err));
}

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
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
            <button className="button">View Orders</button>
            <button className="button">View Inventory</button>
            <button onClick={signOut} className="button">Sign Out</button>
          </div>
        </div>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App,true);
