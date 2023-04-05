import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CartScreen from "../screens/headerScreens/CartScreen";
import MessagesScreen from "../screens/headerScreens/MessagesScreen";
import AboutUsScreen from "../screens/headerScreens/AboutUsScreen";
import BrowseScreen from "../screens/BrowseScreen";
import OTCScreen from "../screens/browseScreens/OTCScreen";
import ImmuneSupportScreen from "../screens/browseScreens/ImmuneSupportScreen";
import ColdAndFluScreen from "../screens/browseScreens/ColdAndFluScreen";
import OtherScreen from "../screens/browseScreens/OtherScreen";
import PharmacyScreen from "../screens/browseScreens/PharmacyScreen";
import CartSummaryScreen from "../screens/headerScreens/CartSummaryScreen";
  
const AppNavigator = createStackNavigator(
  {
    Browse: BrowseScreen,
    About: AboutUsScreen,
    Messages: MessagesScreen,
    OTC: OTCScreen,
    ColdAndFlu: ColdAndFluScreen,
    ImmuneSupport: ImmuneSupportScreen,
    Other: OtherScreen,
    Pharmacy: PharmacyScreen, 
    CartSummary: CartSummaryScreen

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