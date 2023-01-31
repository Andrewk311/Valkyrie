import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CartScreen from "./../screens/CartScreen";
import MessagesScreen from "./../screens/MessagesScreen";
import SettingsScreen from "./../screens/SettingsScreen";
import HomeScreen from "./../screens/HomeScreen2";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialTopTabBar } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    const insets = useSafeAreaInsets();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                "tabBarActiveTintColor": "#e91e63",
                "tabBarLabelStyle": {
                  "fontSize": 12
                },
                "tabBarStyle": {
                  "backgroundColor": "white ",
                  "marginTop": insets.top
                }
              }}
        >
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{ tabBarLabel: "Cart" }}
            />
            <Tab.Screen
                name="Messages"
                component={MessagesScreen}
                options={{ tabBarLabel: "Messages" }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ tabBarLabel: "Settings" }}
            />

        </Tab.Navigator>
    );
}

export default function TopBarNavigator() {
    return (
        <MyTabs />
    )
}