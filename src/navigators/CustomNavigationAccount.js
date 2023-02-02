import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../screens/headerScreens/CartScreen";
import MessagesScreen from "../screens/headerScreens/MessagesScreen";
import AboutUsScreen from "../screens/headerScreens/AboutUsScreen";
import AccountScreen from "../screens/AccountScreen";

  
const AppNavigator = createStackNavigator(
  {
    Account: AccountScreen,
    About: AboutUsScreen,
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