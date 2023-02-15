import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../screens/headerScreens/CartScreen";
import MessagesScreen from "../screens/headerScreens/MessagesScreen";
import SettingsScreen from "../screens/accountScreens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen2";
import TrackingScreen from "../screens/homeScreens/TrackingScreen";
import ContactScreen from "../screens/homeScreens/ContactScreen";
import PrescriptionScreen from "../screens/homeScreens/PrescriptionScreen";
import AboutUsScreen from "../screens/headerScreens/AboutUsScreen";
import CartSummaryScreen from "../screens/headerScreens/CartSummaryScreen";
  
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutUsScreen,
    Messages: MessagesScreen,
    CartSummary: CartSummaryScreen,
    Tracking: TrackingScreen,
    Contact: ContactScreen,
    Prescription: PrescriptionScreen

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
    initialRouteName: "Home",
  }
);
  
const Navigator = createAppContainer(AppNavigator);
  
export default function CustomNavigation() {
  return (
    <Navigator>
      <HomeScreen />
    </Navigator>
  );
}