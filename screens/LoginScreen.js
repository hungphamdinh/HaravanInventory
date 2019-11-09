import React, { Component } from "react";

import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProgressDialog } from 'react-native-simple-dialogs';
import Spinner from 'react-native-loading-spinner-overlay';
import {firebaseConfig} from '../config/config'
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase'
const appId = "1047121222092614"

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressVisible: true,
      spinner: false,
    }

  }
  componentDidMount(){
    this.checkIfLoggedIn();
  }
  signInWithGoogleAsync= async()=> {
    try {
      const result = await Google.logInAsync({
        androidClientId: "489925057956-o8jm2lnnnom02f2e8ebran6p9nnlcson.apps.googleusercontent.com",
        behavior:'web',
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  checkIfLoggedIn=()=>{
    checkIfLoggedIn=()=>{
      firebase.auth().onAuthStateChanged(user=>{
        if(user){
          this.props.navigation.navigate('Main');
        }
        else{
          this.props.navigation.navigate('Login')
        }
      }).bind(this);
    
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Đăng nhập</Text>
            </View>
            <View style={styles.loginBody}>

              <Image
                source={require('../assets/images/spartan-logo.png')}
                style={styles.imageNewFeed}
                resizeMode='contain'

              />
              <TextInput placeholder="Tên đăng nhập" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Mật khẩu" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.openProgress()}
                title="Đăng nhập"
              />
              <TouchableOpacity
                style={styles.fbLoginButton}
               onPress={() => this.signInWithGoogleAsync()}
              >
                <Text style={styles.txtFBLogin}>
                  Đăng nhập với tài khoản Google
                </Text>
              </TouchableOpacity>
            </View>
            <ProgressDialog
              title="Đăng nhập"
              activityIndicatorColor="blue"
              activityIndicatorSize="large"
              animationType="slide"
              message="Vui lòng đợi trong giây lát"
              visible={this.state.showProgress}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.setState({ spinner: false });

  }

  // onLoginPress() {
  //   return(
  //   <ProgressDialog
  //   visible={this.state.progressVisible}
  //   title="Progress Dialog"
  //   message="Please, wait..."
  //   />
  //   // setTimeout(()=>{
  //   //   this.props.navigation.navigate('Main', {});
  //   // },3000);
  //   )    
  // }
  openProgress = () => {
    this.setState({ spinner: true });

    setTimeout(
      () => {
        this.setState({ spinner: false });  
        this.props.navigation.navigate('Main', {});
        //this.setState({ spinner: false });
      },
      4000,
    );
  }
  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}
const styles = StyleSheet.create({

  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 30,
    // justifyContent:'flex-start',
    textAlign: 'center',
  },
  loginFormView: {
    flex: 0.3,
    justifyContent: 'center',
  },
  txtFBLogin: {
    color: '#3897f1',
  },
  loginFormTextInput: {
    height: 60,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 80,
    marginTop: 10,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    alignItems: 'center',
  },
  imageNewFeed: {
    // flex: 1,
    marginBottom: 10,
    height: 80,
    marginHorizontal: 10,
    justifyContent: 'center',

    //backgroundColor:'red',
  },
  loginBody: {
    flex: 0.7,
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
})