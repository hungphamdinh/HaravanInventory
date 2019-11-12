import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen'
import MainTabNavigator from './MainTabNavigator';
import ProductionScreen from '../screens/ProductionScreen'
import ProductDetail from '../screens/ProductDetail'
import SplashScreen from '../screens/SplashScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import ContactScreen from '../screens/ContactScreen';
import DetailOptionScreen from '../screens/DetailOptionScreen'
import InventProgressScreen from '../screens/InventProgressScreen'
import LoadingScreen from '../screens/LoadingScreen'
import Drawer from '../navigation/Drawer'
import HomeScreen from '../screens/HomeScreen'
import firebase from 'firebase'
import {firebaseConfig} from '../config/config'
import { Linking } from 'expo';

const config = {
  // This dynamic link will be rejected by the server
  redirectUrl: `${Linking.makeUrl()}:/oauthredirect`,
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  }
const RootStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },

  },
  Loading:LoadingScreen,
  Main: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Production: ProductionScreen,
  ProductDe: ProductDetail,
  InventProgress:InventProgressScreen,
  DetailOption: DetailOptionScreen,
  AboutUs: AboutUsScreen,
  Contact: ContactScreen,
});


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Splash: SplashScreen,
    Login: LoginScreen,
    RootStack,
    // OptionStack,
  })
);
