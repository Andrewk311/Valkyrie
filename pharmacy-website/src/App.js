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
          <header className="App-header">
          
            <p>
              PHARM portal
            </p>
            <nav>
              <a href="https://www.valkyriedrone.io"> Back to landing page</a>
            </nav>
            <button onClick={signOut} className="signOutButton">SignOut</button>
            <img src={dog}/>
          </header>
        </div>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default withAuthenticator(App,true);
