import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../screens/CartScreen";
import MessagesScreen from "../screens/MessagesScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AccountScreen from "../screens/AccountScreen";

  
const AppNavigator = createStackNavigator(
  {
    Account: AccountScreen,
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
    initialRouteName: "Account",
  }
);
  
const Navigator = createAppContainer(AppNavigator);
  
export default function CustomNavigation() {
  return (
    <Navigator>
      <AccountScreen />
    </Navigator>
  );
}