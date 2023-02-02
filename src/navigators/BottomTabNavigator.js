import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CustomNavigationAccount from './CustomNavigationAccount';
import CustomNavigationBrowse from './CustomNavigationBrowse';
import CustomNavigationHome from './CustomNavigationHome';
import { Dimensions } from 'react-native';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#000000"
            inactiveColor="#FFFFFF"
            barStyle={{ 
                backgroundColor: '#AA9798',
                height:Dimensions.get('window').height*(0.1),
                alignContent:"center", 
                justifyContent:"center",
            }}
        >
            <Tab.Screen
                name="Home"
                component={CustomNavigationHome}
                options={{ 
                    tabBarLabel:"Home",
                    tabBarIcon: (tabInfo) => (
                        <Ionicons name="ios-home" size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Browse"
                component={CustomNavigationBrowse}
                options={{ 
                    tabBarLabel: "Browse",
                    tabBarIcon: (tabInfo) => (
                        <Ionicons name="ios-cart" size={50} resizeMode='contain'/>
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={CustomNavigationAccount}
                options={{ 
                    tabBarLabel: "Account",
                    tabBarIcon: (tabInfo) => (
                        <Ionicons name="ios-person" size={30} resizeMode='contain'/>
                    ), }}
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