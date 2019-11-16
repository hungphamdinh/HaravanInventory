// ./screens/GroupsScreen.js
import React from "react";
import {Picker, Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, Icon, Button, CheckBox } from 'react-native-elements';
import inventory from "../utils/inventory.json";
import TabBarIcon from '../components/TabBarIcon';
export default class InventoryScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listInventory: inventory,
  
    }
  }
 
  onPress = data => this.setState({ data });

  renderOptionItem = ({ item }) => {
    console.log(item.id);
    return (
      <View style={styles.rowOption}>
        <TouchableOpacity style={styles.messeageView}>

          <Image
            source={{ uri: item.avatar_url }}
            style={styles.imageNewFeed}
            resizeMode='contain'
          />

          <View style={styles.detailArea}>
            <View style={styles.row}>
              <View style={{ flex: 0.55, justifyContent: 'center' }}>
                <Text style={styles.label}>{item.first_name}</Text>
              </View>           
            </View>
            <Text style={styles.info}>Ngày bắt đầu: {item.date_begin}</Text>
            <Text style={styles.info}>Số lượng đã bán: {item.quantity}</Text>
          </View>

        </TouchableOpacity>
      </View>
    )
  }
  render() {
    return (
      <View>
        <Picker
              selectedValue={this.state.language}
              style={{ height: 50, width: 100,marginLeft:10,marginTop:10}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ language: itemValue })
              }>
              <Picker.Item label="A - Z" value="java" />
              <Picker.Item label="Ngày nhập" value="js1" />              
            </Picker>
        <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
        </View>
        <FlatList
          data={this.state.listInventory}
          renderItem={this.renderOptionItem}
          keyExtractor={(item) => item.avatar_url}
        />
      </View>

    );
  }
}

InventoryScreen.navigationOptions = props => {

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
  messeageView: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
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
    marginVertical: 5,
    marginLeft: 10,
    width: 200,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row'

  },
  rowOption: {
    flexDirection: 'row',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: '#DEDCDC',

    flex: 1,
  },
  btnDrawer: {
    width: 20,
    height: 20,
    marginLeft: 10,
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
    width: 100,
    height: 120,
    marginHorizontal: 10,
    //sjustifyContent: 'center',
    //alignItems: 'center'
  },
  invenArea: {
    flex: 0.5,

  },
  ckBox: {
    width: 90,
    height: 40,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  btnCheckAllCkb: {
    width: 100,
    height: 30,
    // borderRadius: 20,
    marginTop: 5,
    backgroundColor: 'rgb(71,113,246)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  txtCheckAll: {
    color: '#fff',
    fontSize: 16,
  },
});  
