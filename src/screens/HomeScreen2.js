import React from "react";
import { StyleSheet } from 'react-native';
import { Text, View, Button} from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import Icon from "react-native-vector-icons/Ionicons";

const win = Dimensions.get('window');
const Home = (props) => {
  return (
    <Authenticator.Provider>
        <Authenticator>
          <View style={styles.container}>
            <View style={styles.rect}>
              <Text style={styles.welcome}>Welcome!</Text>
            </View>
            <View style={styles.rect1}>
              <Text style={styles.blackBold}>Selected Pharmacy</Text>
              <Text style={{fontWeight:"bold", color:"#AD3A5C", marginLeft:win.width/10,marginTop:8, fontSize:18}}>
                CVS Pharmacy{"\n"}
                <Text style={{color:"#92989B"}}>500 Hadley Center Dr, {"\n"} South Plainfield, NJ, 08901</Text>
                </Text>
            </View>
          </View>
        </Authenticator>
    </Authenticator.Provider>
  );
};

function SignOutButton() {
    const { signOut } = useAuthenticator();
    return <Button color='#E33737' title="Sign Out" onPress={signOut} />;
  }

Home.navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    return  {
        title: 'Home',
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
  
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(227,55,55,1)"
  },
  rect: {
    width: Dimensions.get('window').width,
    height: 69,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 105,
    alignSelf: "center"
  },
  welcome: {
    color: "#AD3A5C",
    height: 47,
    width: 375,
    fontSize: 40,
    textAlign: "center",
    fontWeight:"bold",
    marginTop: 11
  },
  rect1: {
    width: Dimensions.get('window').width,
    height: 124,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 24
  },
  blackBold: {
    color: "#00000",
    fontSize: 25,
    textAlign: "center",
    fontWeight:"bold",
    marginTop: 11
  }
});