import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from "./../screens/CartScreen";
import MessagesScreen from "./../screens/MessagesScreen";
import SettingsScreen from "./../screens/SettingsScreen";
import HomeScreen from "./../screens/HomeScreen2";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = createStackNavigator();

function HomeStackScreen(){
    
}
