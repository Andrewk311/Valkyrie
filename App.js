import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";
import SettingScreen from "./src/screens/SettingScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    User: UserScreen,
    Setting: SettingScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#006600",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#FFF",
      },
      headerTintColor: "#FFF",
    },
  },
  {
    initialRouteName: "Home",
  }
);

const Navigator = createAppContainer(AppNavigator);

Amplify.configure(config)

export default function App() {
  return (
    <Authenticator.Provider>
      <Authenticator
        signUpAttributes={[
          "name",
          "family_name",
          "email",
          "phone_number",
        ]}
      >
        <Navigator>
          <HomeScreen />
        </Navigator>
      </Authenticator>
    </Authenticator.Provider>
  );
}

const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E33737'},

});