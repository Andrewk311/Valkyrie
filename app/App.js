import React, { useState } from 'react';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CartProvider } from './src/screens/browseScreens/CartContext';
import { WebSocketProvider } from './src/WebSocketContext';

Amplify.configure(config)

export default function App() {
  return (
    <WebSocketProvider>
      <CartProvider>
        <Authenticator.Provider>
          <Authenticator
            signUpAttributes={[
              "name",
              "family_name",
              "email",
              "phone_number",
            ]}
          > 
          <SafeAreaProvider>
            <BottomTabNavigator />
          </SafeAreaProvider>
          </Authenticator>
        </Authenticator.Provider>
      </CartProvider>
    </WebSocketProvider>
  );
}