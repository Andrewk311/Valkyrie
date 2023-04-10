import './Home.css';
import React, {View, Text, Image, Button, Heading} from 'react';
import {Auth} from 'aws-amplify';
import { withAuthenticator, Authenticator, SignIn, SignUp, useTheme, useAuthenticator} from '@aws-amplify/ui-react';
import {useNavigate} from 'react-router-dom';
import dog from './../dallas2.JPG';

const components = {
  // Header() {
  //   return (
  //     <div style={{textAlign: "center", padding: "16px"}}>
  //       <img
  //         alt="Amplify logo"
  //         src={dog}
  //       />
  //     </div>
  //   );
  // },

  Footer() {
    return (
      <div style={{textAlign: "center", padding: "16px"}}>
        <p style={{color: "#666"}}>
          &copy; All Rights Reserved
        </p>
      </div>
    );
  },

  SignIn: {
    Header() {
      return (
        <h3 style={{padding: "32px 0 0 32px"}}>
          Sign in to your account
        </h3>
      );
    },
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <div style={{textAlign: "center"}}>
          <button
            style={{fontWeight: "normal", cursor: "pointer"}}
            onClick={toResetPassword}
            size="small"
          >
            Reset Password
          </button>
        </div>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Create a new account
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: 'Enter your email',
    },
  },
  signUp: {
    password: {
      label: 'Password:',
      placeholder: 'Enter your Password:',
      isRequired: false,
      order: 2,
    },
    confirm_password: {
      label: 'Confirm Password:',
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'Enter your Password:',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'Enter your email:',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: 'Enter your Confirmation Code:',
      label: 'New Label',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'Enter your Password Please:',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

export default function App() {

  const navigate = useNavigate();

  function handleOrdersClick(){
    navigate('/orders')
  }

  function handleInventoryClick(){
    navigate('/inventory')
  }
  
  const signOut = () => {
    Auth.signOut()
      .then(() => console.log('Signed out'))
      .catch(err => console.log('Error signing out: ', err));
  }

  return (
    <Authenticator formFields={formFields} components={components}>
      {({ signOut }) => <button onClick={signOut}>Sign out</button>}
      <div className="App">
            <div className='App-header'>
                <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
                </p>
            </div>
            <div className='homeContents'>
                <p style={{ color:'#FFFFFF', fontWeight: 'normal', textAlign:'center', fontSize: 'calc(20px + 2vmin)', position:'absolute', top: '10%', left:'36%'}}>Welcome to the Pharmacy Portal!</p>
                <button onClick={signOut} className="signOutButton">Sign Out</button>
                <img className='image' src={require('./../logo.png')}></img>
                <div className='button-container'>
                  <button onClick={handleOrdersClick} className="button">View Orders</button>
                  <button onClick={handleInventoryClick} className="button">View Inventory</button>
                </div>
                </div>
            </div>
    </Authenticator>
  );
}