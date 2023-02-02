import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Item, HeaderButton, HeaderButtons} from "react-navigation-header-buttons";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

const Account = (props) => {
  const [input, setInput] = useState("");
  return (
    <Authenticator.Provider>
        <Authenticator>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ color: "#006600", fontSize: 40 }}>Account Screen!</Text>
          <Ionicons name="ios-home" size={80} color="#006600" />
          <TextInput
            placeholder="Enter your name"
            value={input}
            onChangeText={(value) => setInput(value)}
          />
          <Button
            title="Go to Cart Screen"
            color="#006600"
            onPress={() => props.navigation.navigate("Cart", { username: input })}
          />
          <SignOutButton />
        </View>
      </Authenticator>
    </Authenticator.Provider>
  );
};

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button color='#E33737' title="Sign Out" onPress={signOut} />;
}

Account.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation
  return  {
    title: 'Account',
    headerRight: () => (
      <>
      <Button 
        title="Settings" backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)"
        onPress={() => navigate('Settings')}
      />
      <Button 
        title="Messages" backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)"
        onPress={() => navigate('Messages')}
      />
      <Button 
        title="Cart" backgroundColor="rgba(0,0,0,0)" color="rgba(0,122,255,1)"
        onPress={() => navigate('Cart')}
      />
      </>
    )
  }             
}

export default Account;