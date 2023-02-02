import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CustomNavigationAccount from './CustomNavigationAccount';
import CustomNavigationBrowse from './CustomNavigationBrowse';
import CustomNavigationHome from './CustomNavigationHome';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
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
                }
              }}
        >
            <Tab.Screen
                name="Home"
                component={CustomNavigationHome}
                options={{ tabBarLabel: "Home" }}
            />
            <Tab.Screen
                name="Browse"
                component={CustomNavigationBrowse}
                options={{ tabBarLabel: "Browse" }}
            />
            <Tab.Screen
                name="Account"
                component={CustomNavigationAccount}
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