import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
export default class ContactScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Liên hệ</Text>
            </View>
        )
    }
}
ContactScreen.navigationOptions=() => {

    return {
  
      title: "HaravanInventory",
  
    };
  };
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
});