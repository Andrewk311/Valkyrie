import React from "react";
import { StyleSheet } from 'react-native';
import { Text, View, Button, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import { Image } from "react-native";
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
              <Text style={styles.welcome}>WELCOME</Text>
            </View>
            <View style={styles.rect1}>
              <Text style={styles.blackBold}>Selected Pharmacy</Text>
              <Text style={{fontWeight:"bold", color:"#AD3A5C", marginLeft:win.width/10,marginTop:8, fontSize:18}}>
                CVS Pharmacy{"\n"}
                <Text style={{color:"#92989B"}}>500 Hadley Center Dr, {"\n"}South Plainfield, NJ, 08901</Text>
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
    return {
      title:"VALKYRIE",
      headerLeft: () => (
        <Image
        style={{width: 55, marginTop:-8, marginLeft:3, resizeMode: 'contain'}}
        source={require('../../assets/logo.png')} 
        ></Image>
      ),

      headerRight: () => (
      <>
        <View style={styles.container1}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.customBtn}
              onPress={() => navigate('Settings')} 
            >
              <Ionicons name="settings" size={20} color="#000000" />
              <Text style={styles.customBtnText}>Settings</Text>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.customBtn}
              onPress={() => navigate('Messages')} 
            >
              <Ionicons name="mail" size={20} color="#000000" alignSelf="center" />
              <Text style={styles.customBtnText}>Messages</Text>
           </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.customBtn}
              onPress={() => navigate('Cart')} 
            >
              <Ionicons name="cart" size={20} color="#000000" alignContent="center"/>
              <Text style={styles.customBtnText}>Cart</Text>
           </TouchableOpacity>
          </View>

        </View>
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
    backgroundColor: "#FFFFFF",
    alignSelf: "center"
  },
  welcome: {
    color: "#AD3A5C",
    height: 47,
    width: 375,
    fontSize: 40,
    textAlign: "center",
    fontWeight:"bold", 
    marginTop: 20
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
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight:10
  },
  buttonContainer: {
    flex: 1,
    alignContent:"center"
  },
  customBtn:{
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 8
  },
  customBtnText: {
    alignContent:"center",
    marginLeft:2,
  }
  
});