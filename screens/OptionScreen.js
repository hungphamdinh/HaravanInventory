import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import option from "../utils/option.json";
import { ScrollView } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";

export default class OptionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionView: option,
      spinner: false
    };
  }
  onConversationGo = id => {
    const mView = this.state.optionView.find(mIndex => mIndex.id === id);
    console.log(mView);
    this.setState({ spinner: true });
    setTimeout(() => {
      this.setState({ spinner: false });
      this.props.navigation.navigate("DetailOption", {
        updateMessage: mView
      });
    }, 1000);
  };

  render() {
    // console.log(this.state.messagesView);
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
        {this.state.optionView.map(option => {
          return (
            <OptionCard
              key={option.id}
              option={option}
              //  onGoToConversation={props.navigation.navigate}
              onConversationGo={this.onConversationGo}
            />
          );
        })}
      </ScrollView>
    );
  }
}

OptionScreen.navigationOptions = props => {
  return {
    title: "Tiện ích",
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

const OptionCard = props => {
  return (
    <View style={styles.mCard}>
      <Image
        source={{ uri: props.option.avatar_url }}
        style={{
          width: 80,
          height: 80,
          //flex:1,
          marginHorizontal: 5
        }}
        resizeMode="contain"
      />
      <View style={styles.descriptArea}>
        <Text style={styles.txtName}>{props.option.first_name}</Text>
        <Text style={styles.txtTime}>Giá: {props.option.price}</Text>
        <Text numberOfLines={2} style={styles.textStyle}>
          {props.option.last_message_content}
        </Text>
      </View>
      <View style={styles.btnArea}>
        <TouchableOpacity
          style={styles.btnRegister}
          onPress={() => props.onConversationGo(props.option.id)}
        >
          <Text style={{ color: "#fff" }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start"
  },
  mCard: {
    width: "95%",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderColor: "grey",
    flexDirection: "row"
    //  flexWrap:'wrap'
    //flex:1,
    //backgroundColor:'red',
  },
  textStyle: {
    //flex: 1,
    //flexWrap: 'wrap'
  },
  descriptArea: {
    flex: 0.75,
    flexDirection: "column"
    // backgroundColor:'blue'
  },
  txtName: {
    fontWeight: "bold",
    fontSize: 20,
    justifyContent: "flex-start"
  },
  nameArea: {
    flexDirection: "row"
    // backgroundColor:'red',
  },
  txtTime: {
    justifyContent: "flex-end"
  },
  btnDrawer: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  btnRegister: {
    flex: 1,
    //  width:40,
    // borderRadius: 20,
    backgroundColor: "rgb(71,113,246)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    }
  },
  btnArea: {
    flex: 0.25
  },
  spinnerTextStyle: {
    color: "#FFF"
  }
});
