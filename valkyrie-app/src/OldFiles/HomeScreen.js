// import React, { useState } from "react";
// import { Text, View, TextInput, Button, StyleSheet} from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import {Item, HeaderButton, HeaderButtons,} from "react-navigation-header-buttons";
// import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
// import { withAuthenticator } from 'aws-amplify-react-native'

// const Home = (props) => {
//   const [input, setInput] = useState("");
//   return (
//     <Authenticator.Provider>
//         <Authenticator>
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text>
//                     <Ionicons name="ios-home" size={80} color="#006600" />
//                         <TextInput
//                             placeholder="Enter your name!"
//                             value={input} 
//                             onChangeText={(value) => setInput(value)}
//                         />
//                 <Button
//                     title="Go to User Screen"
//                     color="#006600"
//                     onPress={() => props.navigation.navigate("User", { username: input })}
//                 />
//                 <SignOutButton />
//             </View>
            
//         </Authenticator>
//     </Authenticator.Provider>
//   );
// };
  
// const HeaderButtonComponent = (props) => (
//   <HeaderButton
//     IconComponent={Ionicons}
//     iconSize={23}
//     color="#FFF" 
//     {...props}
//   />
// );

// function SignOutButton() {
//     const { signOut } = useAuthenticator();
//     return <Button color='#E33737' title="Sign Out" onPress={signOut} />;
//   }
  
// Home.navigationOptions = (navData) => {
//   return {
//     headerTitle: "Home",
//     headerRight: () => (
//     <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
//         <Item
//         title="Setting"
//         iconName="ios-settings-outline"
//         onPress={() => navData.navigation.navigate("Setting")}
//         />
//     </HeaderButtons>
//     ),
//     headerLeft: () => (
//     <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
//         <Item 
//         title="User"
//         iconName="person-outline"
//         onPress={() => navData.navigation.navigate("User")}
//         />
//     </HeaderButtons>
//     ),
//   };
// };

// const style = StyleSheet.create({
//     container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E33737'},
  
//   });
  
// export default Home;