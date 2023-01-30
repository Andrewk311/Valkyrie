import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import HomeScreen from "./src/screens/HomeScreen";
import UserScreen from "./src/screens/UserScreen";
import SettingScreen from "./src/screens/SettingScreen";
import HomeScreen2 from "./src/screens/HomeScreen2";
import UserScreen2 from "./src/screens/UserScreen2";
import SettingScreen2 from "./src/screens/SettingScreen2";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen2,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-home"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    User: {
      screen: UserScreen2,
      navigationOptions: {
        tabBarLabel: "User",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-person-circle-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Setting: {
      screen: SettingScreen2,
      navigationOptions: {
        tabBarLabel: "Setting",
        tabBarIcon: (tabInfo) => (
          <Ionicons
            name="md-settings-outline"
            size={tabInfo.focused ? 26 : 20}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#006600" },
  }
);
  
const Navigator = createAppContainer(TabNavigator);

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

const Navigator2 = createAppContainer(AppNavigator);

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
          <Navigator2>
            <HomeScreen />
          </Navigator2>
        </Navigator>
      </Authenticator>
    </Authenticator.Provider>
  );
}



const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E33737'},

});