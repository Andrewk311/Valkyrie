import { useState } from "react";
import { Text, View, Dimensions, TouchableOpacity, Image} from "react-native";
import { ScrollView, StyleSheet } from 'react-native';
import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { Ionicons } from "@expo/vector-icons";

const Browse = (props) => {
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <ScrollView style={{marginHorizontal:0, backgroundColor:"rgba(227,55,55,1)"}}>
      <View style={{backgroundColor:'white'}}>
      <Searchbar
      placeholder="Search..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      platform={Platform.OS}
    />
    </View>
      <View style={styles.rowContainer}>
        <View style={styles.column1}>
          <TouchableOpacity
                  style={styles.category}
                  onPress={() => props.navigation.navigate('FirstAidCare')} 
                >         
                <View>     
                <Text style={styles.optionTitle}>COVID-19{"\n"}Tests</Text>
                </View>  
                <Image style={styles.tinyLogo}
              source={require('./../customIcons/Covid.png')}
              />
              </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => props.navigation.navigate('ImmuneSupport')} 
              >         
              <View>     
              <Text style={styles.optionTitle}>Immune{"\n"}Support</Text>
              </View>  
              <Image style={styles.tinyLogo}
              source={require('./../customIcons/Pill.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => props.navigation.navigate('Medicine')} 
              >         
              <View>     
              <Text style={styles.optionTitle}>Cold/Flu{"\n"}Medicine</Text>
              </View>  
              <Image style={styles.tinyLogo}
              source={require('./../customIcons/Medicine.png')}
              />
            </TouchableOpacity>
        </View>
        <View style={styles.columns}>
        <TouchableOpacity
                  style={styles.category}
                  onPress={() => props.navigation.navigate('FirstAidCare')} 
                >         
                <View>     
                <Text style={styles.optionTitle}>First-Aid{"\n"}Care</Text>
                </View>
                <Image style={styles.tinyLogo}
              source={require('./../customIcons/FirstAid.png')}
              />
              </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => props.navigation.navigate('SanitationSupplies')} 
              >         
              <View>     
              <Text style={styles.optionTitle}>Sanitation{"\n"}Supplies</Text>
              </View>  
              <Image style={styles.tinyLogo}
              source={require('./../customIcons/Sanitize.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.category}
                onPress={() => props.navigation.navigate('Pharmacy')} 
              >         
              <View>     
              <Text style={styles.optionTitle}>Pharmacy{"\n"}</Text>
              </View>  
              <Image style={styles.tinyLogo}
              source={require('./../customIcons/RX.png')}
              />
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  );
};

Browse.navigationOptions = ({ navigation }) => {
  const { navigate } = navigation
  return  {
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
            onPress={() => navigate('About')} 
          >
            <Ionicons name="people-sharp" size={20} color="#000000" />
            <Text style={styles.customBtnText}>About Us</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.customBtn}
            onPress={() => navigate('Messages')} 
          >
            <Ionicons name="mail" size={20} color="#000000"/>
            <Text style={styles.customBtnText}>Messages</Text>
         </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.customBtn}
            onPress={() => navigate('CartSummary')} 
          >
            <Ionicons name="cart" size={20} color="#000000"/>
            <Text style={styles.customBtnText}>Cart</Text>
         </TouchableOpacity>
        </View>

      </View>
        </>
    )
  }             
}

export default Browse;
const styles = StyleSheet.create({
  rowContainer:{
    flexDirection: 'row',
    marginTop:0,
    alignContent:'center',
    justifyContent:'center'
  },
  column1:{
    flexDirection: 'column',
    alignContent:'center',
    marginRight:15
  },
  category: {
    backgroundColor: "white",
    borderRadius:12,
    width:Dimensions.get('window').width*(0.98)*(0.45),
    height:Dimensions.get('window').width*(0.45),
    marginTop:14,
    flexDirection: 'column',
  },
  optionTitle:{
    fontWeight:"bold",
    fontSize:28,
    color:"black",
    marginLeft:-20,
    alignSelf:'center',
    marginTop:30
  },
  tinyLogo:{
    width: 40,
    height: 40,
    resizeMode:'contain',
    marginLeft:Dimensions.get('window').width*(0.98)*(0.45) -55,
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
  },
});