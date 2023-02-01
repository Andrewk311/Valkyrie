// import React from "react";
// import { Text, View, Button } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import {Item, HeaderButton, HeaderButtons,} from "react-navigation-header-buttons";

  
// const Settings = () => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ color: "#006600", fontSize: 40 }}>Settings Screen!</Text>
//       <Ionicons name="ios-settings-outline" size={80} color="#006600" />
//     </View>
//   );
// };

// const HeaderButtonComponent = (props) => (
//     <HeaderButton
//       IconComponent={Ionicons}
//       iconSize={23}
//       color="#FFF"    //changed the color of the settings wheel at the top of the home screen but when deleted nothing changes 
//       {...props}
//     />
//   );

// Settings.navigationOptions = (navData) => {
//     return {
//       headerTitle: "Settings",
//       headerRight: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
//           <Item
//           title="User"
//           iconName="person-outline"
//           onPress={() => navData.navigation.navigate("User")}
//           />
//       </HeaderButtons>
//       ),
//     };
//   };
  
// export default Settings;