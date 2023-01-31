import React from "react";
import { Text, View, Button} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
  
const Home = () => {
  return (
    <Authenticator.Provider>
        <Authenticator>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text>
                <Ionicons name="ios-home" size={80} color="#006600" />
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
  
export default Home;