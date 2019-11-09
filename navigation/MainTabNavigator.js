import React from 'react';
import {Text as TouchableOpacity,View, Platform,StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator,createDrawerNavigator,createAppContainer } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import InventoryScreen from '../screens/InventoryScreen';
import OptionScreen from '../screens/OptionScreen';
import HomeScreen from '../screens/HomeScreen';
import NotiScreen from '../screens/NotiScreen'
import ProductionScreen from '../screens/ProductionScreen'
import Drawer from '../navigation/Drawer'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const InventoryStack = createStackNavigator(
  {
    Inventory: InventoryScreen,
    
    // ProfileDetail: ProfileDetailScreen,
  },
  config
);

InventoryStack.navigationOptions = {
  tabBarLabel: 'Tồn kho',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-link' : 'md-link'
      }
    />
  ),
};

InventoryStack.path = '';

const OptionStack = createStackNavigator(
  {
    Option: OptionScreen,
  },
  config
);

OptionStack.navigationOptions = {
  tabBarLabel: 'Tiện ích',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

OptionStack.path = '';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
//    Production:ProductionScreen,
    // Conservation: ConservationScreen,
  },
  config
);
const DrawerStack = createStackNavigator(
  {
    Production:ProductionScreen,
  },
  config
);
HomeStack.navigationOptions = {
  
  tabBarLabel: 'Trang chủ',
  
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
  
};

HomeStack.path = '';
const NotiStack = createStackNavigator(
  {
    Setting: NotiScreen,
  },
  config
);

NotiStack.navigationOptions = {
  tabBarLabel: 'Thông báo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-notifications-outline'
          : 'md-notifications-outline'
      }
    />
  ),
};

NotiStack.path = '';

const tabNavigator = createBottomTabNavigator({
  
  HomeStack,
  MessageStack: InventoryStack,
  ContactStack: OptionStack,
  NotiStack,
});

const drawer = createDrawerNavigator(
  {
    Initial: tabNavigator
    
  },
  {
    contentComponent: Drawer
  }
);

export default drawer;
const styles = StyleSheet.create({
  drawer: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
  },
 
});