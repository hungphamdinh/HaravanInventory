import { CheckBox } from 'react-native-elements';
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from 'react';

export default class CustomCheckbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        checked: false,
      };
    }
    toggleChange(){
      this.setState({checked: !this.state.checked});
    }
    render() {
      return (
       <View>
    <Text>{this.props.name}</Text>
    <CheckBox 
      checked={this.state.checked}
      onPress={() =>  this.bind.toggleChange()}
    />
  </View>
      );
    }
  }