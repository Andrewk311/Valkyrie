import dog from './../dallas2.JPG';
import './Home.css';
import {Auth} from 'aws-amplify';
import { withAuthenticator, Button, Authenticator, useAuthenticator, ScrollView, SignIn, AmplifyAuthenticator, Theme, ThemeProvider, useTheme } from '@aws-amplify/ui-react';
import {useNavigate} from 'react-router-dom';



// const MyTheme = Object.assign({}, AmplifyTheme, {
//     button: {
//       ...AmplifyTheme.button,
//       backgroundColor: 'green',
//       borderRadius: '5px',
//       padding: '10px 20px',
//       fontWeight: 'bold',
//       cursor: 'pointer'
//     }
//   });

const signOut = () => {
  Auth.signOut()
    .then(() => console.log('Signed out'))
    .catch(err => console.log('Error signing out: ', err));
}

function App() {

    const { tokens } = useTheme();
  const theme = {
    name: 'Auth Example Theme',
    tokens: {
      colors: {
        background: {
          primary: {
            value: tokens.colors.neutral['90'].value,
          },
          secondary: {
            value: tokens.colors.neutral['100'].value,
          },
        },
        font: {
          interactive: {
            value: tokens.colors.white.value,
          },
        },
        brand: {
          primary: {
            '10': tokens.colors.teal['100'],
            '80': tokens.colors.teal['40'],
            '90': tokens.colors.teal['20'],
            '100': tokens.colors.teal['10'],
          },
        },
      },
      components: {
        tabs: {
          item: {
            _focus: {
              color: {
                value: tokens.colors.white.value,
              },
            },
            _hover: {
              color: {
                value: tokens.colors.yellow['80'].value,
              },
            },
            _active: {
              color: {
                value: tokens.colors.white.value,
              },
            },
          },
        },
      },
    },
  };

  const navigate = useNavigate();

  function handleOrdersClick(){
    navigate('/orders')
  }

  function handleInventoryClick(){
    navigate('/inventory')
  }

  return (
    <ThemeProvider theme={theme}>
    <Authenticator>
        <div className="App">
            <div className='App-header'>
                <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
                </p>
            </div>
            <div className='homeContents'>
                <p style={{ color:'#FFFFFF', fontWeight: 'normal', textAlign:'center', fontSize: 'calc(20px + 2vmin)', position:'absolute', top: '10%', left:'36%'}}>Welcome to the Pharmacy Portal!</p>
                <img className='image' src={require('./../logo.png')}></img>
                <div className='button-container'>
                  <button onClick={handleOrdersClick} className="button">View Orders</button>
                  <button onClick={handleInventoryClick} className="button">View Inventory</button>
                  <button onClick={signOut} className="button">Sign Out</button>
                </div>
                </div>
            </div>
    </Authenticator>
    </ThemeProvider>
  );
}

export default withAuthenticator(App,true);
