import './Home.css';
import React from 'react';
import {Auth} from 'aws-amplify';
import { withAuthenticator, Authenticator, SignIn, SignUp, useTheme, useAuthenticator, Heading} from '@aws-amplify/ui-react';
import {useNavigate} from 'react-router-dom';
import dog from './../dallas2.JPG';
import logo from './../logo.png';

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
  // WORKING HEREEEE
  SignIn: {
    Header() {
      return (
        <div style={{textAlign:'center', alignContent: "center", marginTop: "-3%"}}>
          <p style={{color:'#92989B', fontWeight:'bold',fontSize:25}}>Valkyrie Pharmacy Portal</p>
          <p style={{backgroundColor:'#E33737', marginBottom:'-3%',}}><img src={logo} style={{width:'150px', height:'90px', marginBottom:'8%', marginTop:'3%'}}></img></p>
          
        </div>
        

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
        <div style={{textAlign:'center', alignContent: "center", marginTop: "-3%"}}>
          <p style={{color:'#92989B', fontWeight:'bold',fontSize:25}}>Valkyrie Pharmacy Portal</p>
          <p style={{backgroundColor:'#E33737', marginBottom:'-3%',}}><img src={logo} style={{width:'150px', height:'90px', marginBottom:'8%', marginTop:'3%'}}></img></p>

        </div>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <div textAlign="center">
          <button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Back to Sign In
          </button>
        </div>
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
      return <p>Footer Information</p>;
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
      return <p>Footer Information</p>;
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
      return <p>Footer Information</p>;
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
      return <p>Footer Information</p>;
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
      return <p>Footer Information</p>;
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
};
