import React from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { withAuthenticator } from 'aws-amplify-react-native'
import HomeScreen from "./src/OldFiles/HomeScreen";
import UserScreen from "./src/OldFiles/UserScreen";
import SettingScreen from "./src/OldFiles/SettingScreen";
import HomeScreen2 from "./src/screens/HomeScreen2";
import BrowseScreen from "./src/screens/BrowseScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CartScreen from "./src/screens/CartScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import TopBarNavigator from './src/OldFiles/TopBarNavigator';
import BottomTabNavigator from './src/navigators/BottomTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CustomNavigation from './src/navigators/CustomNavigationAccount';
//import BottomTabNavigator from './src/navigators/BottomTabNavigator';

// const BottomTabNavigator = createMaterialBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen2,
//       navigationOptions: {
//         tabBarLabel: "Home",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-home-outline"
//             size={tabInfo.focused ? 26 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//     Browse: {
//       screen: BrowseScreen,
//       navigationOptions: {
//         tabBarLabel: "Browse",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-cart-outline"
//             size={tabInfo.focused ? 26 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//     Account: {
//       screen: AccountScreen,
//       navigationOptions: {
//         tabBarLabel: "Account",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-person-circle-outline"
//             size={tabInfo.focused ? 26 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: "Home",
//     barStyle: { backgroundColor: "#AA9798" },
//   }
// );
  
// const botNavigator = createAppContainer(BottomTabNavigator);

// used currently
// const BottomTabNavigator = createMaterialBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeScreen2,
//       navigationOptions: {
//         tabBarLabel: "Home",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-home-outline"
//             size={tabInfo.focused ? 26 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//     Browse: {
//       screen: BrowseScreen,
//       navigationOptions: {
//         tabBarLabel: "Browse",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-cart-outline"
//             size={tabInfo.focused ? 26 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//     Account: {
//       screen: AccountScreen,
//       navigationOptions: {
//         tabBarLabel: "Account",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-person-circle-outline"
//             size={tabInfo.focused ? 26 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//   },
//   {
//     initialRouteName: "Home",
//     activeColor: "#000000",
//     inactiveColor:"#FFFFFF",
//     barStyle: { backgroundColor: "#AA9798", height: 80},


//   }
// );

// const TopTabNavigator = createMaterialTopTabNavigator(
//   {
//     Cart: {
//       screen: CartScreen,
//       navigationOptions: {
//         tabBarLabel: "Cart",
//         showLabel: ({ focused }) => {
//           console.log(focused);
//           return focused ? true : false;
//         },
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-cart-sharp"
//             size={tabInfo.focused ? 25 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//     Messages: {
//       screen: MessagesScreen,
//       navigationOptions: {
//         tabBarLabel: "Messages",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-chatbox-sharp"
//             size={tabInfo.focused ? 24 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//     Settings: {
//       screen: SettingsScreen,
//       navigationOptions: {
//         tabBarLabel: "Settings",
//         tabBarIcon: (tabInfo) => (
//           <Ionicons
//             name="ios-settings-sharp"
//             size={tabInfo.focused ? 25 : 20}
//             color={tabInfo.tintColor}
//           />
//         ),
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       showIcon: true,
  
//       style: {
//         backgroundColor: "#006600",
//         marginTop: 28,
//       },
//     },
//   }
// );
  
// const topNavigator = createAppContainer(TopTabNavigator);

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Cart"
//       tabBarOptions={{
//         activeTintColor: '#e91e63',
//         labelStyle: { fontSize: 12 },
//         style: { backgroundColor: 'powderblue' },
//       }}
//     >
//       <Tab.Screen
//         name="Cart"
//         component={CartScreen}
//         options={{ tabBarLabel: 'Cart' }}
//       />
//       <Tab.Screen
//         name="Messages"
//         component={MessagesScreen}
//         options={{ tabBarLabel: 'Messages' }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{ tabBarLabel: 'Settings' }}
//       />
//     </Tab.Navigator>
//   );
// }

// const AppNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     User: UserScreen,
//     Setting: SettingScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "#006600",
//       },
//       headerTitleStyle: {
//         fontWeight: "bold",
//         color: "#FFF",
//       },
//       headerTintColor: "#FFF",
//     },
//   },
//   {
//     initialRouteName: "Home",
//   }
// );

//const Navigator = createAppContainer(BottomTabNavigator);
//const Navigator2 = createAppContainer(TopTabNavigator);

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
      <SafeAreaProvider>
        <BottomTabNavigator />
      </SafeAreaProvider>
      </Authenticator>
    </Authenticator.Provider>
  );
}



const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E33737'},

});