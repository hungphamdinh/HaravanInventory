// ./screens/GroupsScreen.js
import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, Icon, Button } from "react-native-elements";
import production from "../utils/production.json";

export default class ProductionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: production
    };
  }
  onProductDetail = id => {
    const pView = this.state.listProduct.find(pIndex => pIndex.id === id);
    console.log(pView);
    setTimeout(() => {
      this.props.navigation.navigate("ProductDe", {
        updatedProduct: pView
      });
    }, 1000);
  };
  onPress = data => this.setState({ data });

  renderOptionItem = ({ item }) => {
    console.log(item.id);
    return (
      <TouchableOpacity
        style={styles.messeageView}
        onPress={() => this.onProductDetail(item.id)}
      >
        <Image
          source={{ uri: item.avatar_url }}
          style={styles.imageNewFeed}
          resizeMode="contain"
        />

        <View style={styles.detailArea}>
          <Text style={styles.label}>{item.first_name}</Text>
          <Text style={styles.info}>Giá: {item.price}</Text>
          <Text numberOfLines={2} style={styles.info}>
            {item.last_message_content}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View style={styles.rowOption}>
        <FlatList
          data={this.state.listProduct}
          renderItem={this.renderOptionItem}
          keyExtractor={item => item.last_message_content}
        />
      </View>
    );
  }
}

ProductionScreen.navigationOptions = () => {
  return {
    title: "HaravanInventory"
  };
};

const styles = StyleSheet.create({
  btnDrawer: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  messeageView: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row"
  },
  containerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    // marginTop: 40,
    alignItems: "center",
    // backgroundColor: '#fff',
    justifyContent: "center"
  },
  header: {
    height: 30,
    width: "100%",
    backgroundColor: "pink"
  },
  detailArea: {
    marginVertical: 20,
    marginLeft: 10,
    width: 200,
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  rowOption: {
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#DEDCDC",

    flex: 1
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
    fontWeight: "bold"
  },
  info: {
    fontSize: 16,
    color: "grey"
  },
  imageNewFeed: {
    flex: 1,
    width: 80,
    //height: 120,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor:'red',
  },
  invenArea: {
    flex: 0.5
  },
  btnRegister: {
    flex: 1,
    width: 100,
    height: null,
    // borderRadius: 20,
    backgroundColor: "rgb(71,113,246)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    marginLeft: 10,
    color: "#fff"
  }
});
