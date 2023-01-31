import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "./../screens/HomeScreen2";
import BrowseScreen from "./../screens/BrowseScreen";
import AccountScreen from "./../screens/AccountScreen";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TopBarNavigator from './TopBarNavigator';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    //const insets = useSafeAreaInsets();
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
                  //"marginTop": insets.top
                }
              }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: "Home" }}
            />
            <Tab.Screen
                name="Browse"
                component={TopBarNavigator}
                options={{ tabBarLabel: "Browse" }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{ tabBarLabel: "Account" }}
            />

        </Tab.Navigator>
    );
}

export default function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}