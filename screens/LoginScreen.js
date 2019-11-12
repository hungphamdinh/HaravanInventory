import React, { Component } from "react";

import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { TouchableOpacity } from "react-native-gesture-handler";
import { ProgressDialog } from 'react-native-simple-dialogs';
import {GoogleSignIn} from 'expo-google-sign-in';
import Spinner from 'react-native-loading-spinner-overlay';
import * as Google from 'expo-google-app-auth';
import firebase from 'firebase'
import Expo from 'expo'
const appId = "1047121222092614"

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressVisible: true,
      spinner: false,
    }

  }
  
  
  onSignIn = googleUser => {
    console.log('Google Auth Response', googleUser);
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = firebase.auth().onAuthStateChanged(
      function(firebaseUser) {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!this.isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          firebase
            .auth()
            .signInWithCredential(credential)
            .then(function(result) {
              console.log('user signed in ');
              if (result.additionalUserInfo.isNewUser) {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .set({
                    gmail: result.user.email,
                    profile_picture: result.additionalUserInfo.profile.picture,
                    first_name: result.additionalUserInfo.profile.given_name,
                    last_name: result.additionalUserInfo.profile.family_name,
                    created_at: Date.now()
                  })
                  .then(function(snapshot) {
                    // console.log('Snapshot', snapshot);
                  });
              } else {
                firebase
                  .database()
                  .ref('/users/' + result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        } else {
          console.log('User already signed-in Firebase.');
        }
      }.bind(this)
    );
  };
  isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
            firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  componentDidMount(){
    //console.log(firebase.database())
  }
  signInWithGoogleAsync= async()=> {
    try {
      const result = await Google.logInAsync({
        androidClientId: "129108952081-ueggvfsvl6hsdt85e4ok79t0ec595a5n.apps.googleusercontent.com",
        //behavior:'web',
        androidStandaloneAppClientId:  "129108952081-ueggvfsvl6hsdt85e4ok79t0ec595a5n.apps.googleusercontent.com",
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        this.onSignIn(result);
        console.log(result.accessToken)
        this.props.navigation.navigate('Loading',  {
          'token':result.accessToken
        });    
        return result.accessToken;
    
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e);
      return { error: true };
    }
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
