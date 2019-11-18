import React from "react";
import { Image, View, Text, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class ProductDetai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { navigation } = this.props;
    const {
      avatar_url,
      first_name,
      price,
      last_message_content
    } = navigation.getParam("updatedProduct");

    onProfileGo = uri => {
      setTimeout(() => {
        this.props.navigation.navigate("ProfileDetail", {
          updateProfile: uri
        });
      }, 1000);
    };
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onProfileGo(avatar_url)}>
          <Image
            source={{ uri: avatar_url }}
            style={{
              width: null,
              height: 80
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text>{first_name}</Text>
          <Text>{price}</Text>
        </View>
        <Text>{last_message_content}</Text>
      </View>
    );
  }
}

//alert(props.navigation.getParam('updateMessage'));
ProductDetai.navigationOptions = {
  titile: "Chi tiết sản phẩm"
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
  }
});
