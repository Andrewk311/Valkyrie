import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../screens/CartScreen";
import MessagesScreen from "../screens/MessagesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import BrowseScreen from "../screens/BrowseScreen";

  
const AppNavigator = createStackNavigator(
  {
    Browse: BrowseScreen,
    Settings: SettingsScreen,
    Messages: MessagesScreen,
    Cart: CartScreen

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
    initialRouteName: "Browse",
  }
);
  
const Navigator = createAppContainer(AppNavigator);
  
export default function CustomNavigation() {
  return (
    <Navigator>
      <BrowseScreen />
    </Navigator>
  );
}