import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../screens/headerScreens/CartScreen";
import MessagesScreen from "../screens/headerScreens/MessagesScreen";
import AboutUsScreen from "../screens/headerScreens/AboutUsScreen";
import AccountScreen from "../screens/AccountScreen";
import SettingsScreen from "../screens/accountScreens/SettingsScreen";
import InsuranceScreen from "../screens/accountScreens/InsuranceScreen";
import PaymentScreen from "../screens/accountScreens/PaymentScreen";
import OrderHistoryScreen from "../screens/accountScreens/OrderHistoryScreen";
import TrackingScreen from "../screens/homeScreens/TrackingScreen";
import PrescriptionScreen from "../screens/homeScreens/PrescriptionScreen";

  
const AppNavigator = createStackNavigator(
  {
    Account: AccountScreen,
    About: AboutUsScreen,
    Messages: MessagesScreen,
    Cart: CartScreen,
    Settings: SettingsScreen,
    Insurance: InsuranceScreen,
    Payment: PaymentScreen,
    OrderHistory: OrderHistoryScreen,
    Tracking: TrackingScreen,
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