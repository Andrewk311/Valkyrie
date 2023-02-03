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
        backgroundColor: "#FFFFFF",
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontFamily:'Avenir',
        fontSize:25,
        color: "#92989B",
        marginLeft:-15
      },
      headerTintColor: "#92989B",
      headerTitleAlign: 'left',
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