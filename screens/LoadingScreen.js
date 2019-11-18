import React, { Component } from "react";

import {
  ActivityIndicator,
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import Spinner from "react-native-loading-spinner-overlay";
import { firebaseConfig } from "../config/config";
import * as Google from "expo-google-app-auth";
import firebase from "firebase";
const appId = "1047121222092614";
//firebase.initializeApp(firebaseConfig)
export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressVisible: true,
      spinner: false
    };
  }

  checkIfLoggedIn = () => {
    checkIfLoggedIn = () => {
      firebase
        .auth()
        .onAuthStateChanged(user => {
          if (user) {
            this.props.navigation.navigate("Main");
          } else {
            this.props.navigation.navigate("Login");
          }
        })
        .bind(this);
    };
  };
  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }
}
const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  loginScreenContainer: {
    flex: 1
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 30,
    // justifyContent:'flex-start',
    textAlign: "center"
  },
  loginFormView: {
    flex: 0.3,
    justifyContent: "center"
  },
  txtFBLogin: {
    color: "#3897f1"
  },
  loginFormTextInput: {
    height: 60,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#eaeaea",
    backgroundColor: "#fafafa",
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5
  },
  loginButton: {
    backgroundColor: "#3897f1",
    borderRadius: 5,
    height: 80,
    marginTop: 10
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    alignItems: "center"
  },
  imageNewFeed: {
    // flex: 1,
    marginBottom: 10,
    height: 80,
    marginHorizontal: 10,
    justifyContent: "center"

    //backgroundColor:'red',
  },
  loginBody: {
    flex: 0.7
  },
  spinnerTextStyle: {
    color: "#FFF"
  }
});
