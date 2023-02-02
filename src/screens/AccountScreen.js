import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Item, HeaderButton, HeaderButtons} from "react-navigation-header-buttons";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Auth } from 'aws-amplify';


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

// async function signOut() {
//     try {
//         await Auth.signOut();
//     } catch (error) {
//         console.log('error signing out: ', error);
//     }
// }

const HeaderButtonComponent = (props) => (
  <HeaderButton
    IconComponent={Ionicons}
    iconSize={23}
    color="#FFF"
    {...props}
  />
  // <Button
  // title="Go to Cart Screen"
  // color="#006600"
  // onPress={() => {
  //   console.log(props);
  //   //props.navigation.navigate("Settings")
  // }}
  // />

);

// Account.navigationOptions = (navData) => {
//   return {
//     headerTitle: "Account",
//     headerRight: () => (
//     <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
//         <Item
//         title="Settings"
//         iconName="ios-settings-outline"
//         onPress={() => navData.navigation.navigate("Setting")}
//         />
//     </HeaderButtons>
//     ),
//   };
// };

// Account.navigationOptions = ({ navigation }) => {
//   return {
//     headerTitle: "Home",
//     headerRight: (props) => (
//       // <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
//       //   <Item
//       //     title="Setting"
//       //     iconName="ios-settings-outline"
//       //     onPress={() => {
//       //       console.log(props);
//       //       navigation.navigate('Settings');
//       //       // navData.navigation.navigate("Settings")
//       //     }}
//       //     {...test(navData)}
//       //   />
//       // </HeaderButtons>
//       <Button
//         title="Go to Cart Screen"
//         color="#006600"
//         onPress={() => {
//           navigation.navigate('Settings');

//           //props.navigation.navigate("Settings")
//         }}
//       />

//     ),
//   };
// };

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