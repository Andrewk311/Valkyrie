import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../screens/headerScreens/CartScreen";
import MessagesScreen from "../screens/headerScreens/MessagesScreen";
import AboutUsScreen from "../screens/headerScreens/AboutUsScreen";
import BrowseScreen from "../screens/BrowseScreen";

  
const AppNavigator = createStackNavigator(
  {
    Browse: BrowseScreen,
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