import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from "../screens/headerScreens/CartScreen";
import MessagesScreen from "../screens/headerScreens/MessagesScreen";
import SettingsScreen from "../screens/accountScreens/SettingsScreen";

const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function AccountStackNav() {
    return (
        <MyTabs />
    )
}