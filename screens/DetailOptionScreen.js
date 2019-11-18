import React from "react";
import { Image, View, Text, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class DetailOptionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { navigation } = this.props;
    const {
      avatar_url,
      first_name,
      last_message_content: price
    } = navigation.getParam("updateMessage");

    return (
      <View style={styles.container}>
        <View style={styles.informAre}>
          <TouchableOpacity>
            <Image
              source={{ uri: avatar_url }}
              style={{
                width: null,
                height: 200
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={styles.txtInfo}>{first_name}</Text>
          </View>
          <Text style={styles.txtInfo}>{price}</Text>
        </View>
        <View style={styles.footerAre}>
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.txtRegister}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//alert(props.navigation.getParam('updateMessage'));
DetailOptionScreen.navigationOptions = {
  titile: "HaravanInventory"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  informAre: {
    flex: 0.9
  },
  footerAre: {
    //backgroundColor:'red',
    flexDirection: "column",
    flex: 0.1
  },
  btnRegister: {
    //textAlign:'center',
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#3897f1",
    borderRadius: 5
  },
  txtRegister: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  txtInfo: {
    fontSize: 24
  }
});
