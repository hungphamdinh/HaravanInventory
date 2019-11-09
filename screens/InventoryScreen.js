// ./screens/GroupsScreen.js
import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, Icon, Button } from 'react-native-elements';
import inventory from "../utils/inventory.json";
import TabBarIcon from '../components/TabBarIcon';
export default class NotiScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listInventory:inventory,

    }
  }
 
  onPress = data => this.setState({ data });
 
  renderOptionItem = ({ item }) => {
    console.log(item.id);
    return (
      <TouchableOpacity style={styles.messeageView}>
        <Image
          source={{ uri: item.avatar_url }}
          style={styles.imageNewFeed}
          resizeMode='contain'
        />
       
          <View style={styles.detailArea}>
            <Text style={styles.label}>{item.first_name}</Text>
            <Text style={styles.info}>Ngày bắt đầu: {item.date_begin}</Text>
            <Text style={styles.info}>Số lượng đã bán: {item.quantity}</Text>
          </View>
     
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.rowOption}>
          <FlatList
            data={this.state.listInventory}
            renderItem={this.renderOptionItem}
            keyExtractor={(item) => item.avatar_url}
          />
        </View>
  
    );
  }
}

NotiScreen.navigationOptions = props => {

  return {

    title: "Tồn kho",
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Image
            style={styles.btnDrawer}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
            }}
          />
        </TouchableOpacity>

      );
    }

  };
};

const styles = StyleSheet.create({
  messeageView:{
    marginHorizontal: 10,
    marginVertical:10,
    flexDirection:'row',
  },
  containerFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    // marginTop: 40,
    alignItems: 'center',
    // backgroundColor: '#fff',
    justifyContent: 'center',

  },
  header: {
    height: 30,
    width: '100%',
    backgroundColor: 'pink'
  },
  detailArea: {
    marginVertical: 20,
    marginLeft: 10,
    width: 200,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row'

  },
  rowOption: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#DEDCDC',

    flex: 1,
  },
  btnDrawer:{
    width:20,
    height:20,
    marginLeft:10,
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    fontWeight: 'bold'
  },
  info: {
    fontSize: 16,
    color: 'grey'
  },
  imageNewFeed: {
    flex: 1,
    width: 80,
    //height: 120,
    marginHorizontal:10,
    justifyContent: 'center',
    alignItems:'center'
    //backgroundColor:'red',
  },
  invenArea: {
    flex: 0.5,

  },
 
});  
