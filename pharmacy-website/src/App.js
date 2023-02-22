import dog from './dallas2.JPG';
import './App.css';
import { withAuthenticator, Button, Heading, Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Amplify from '@aws-amplify/core';
import config from './aws-exports'

Amplify.configure(config)

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button width='100px' height='100px' color='#000000' title="Sign Out" onPress={signOut} />;
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
            <SignOutButton/>
            <nav>
              <a href="https://www.valkyriedrone.io"> Back to landing page</a>
            </nav>
            
            <img src={dog}/>
          </header>
        </div>
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
