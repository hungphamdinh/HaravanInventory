import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
export default class AboutUsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Về chúng tôi</Text>
      </View>
    );
  }
}
AboutUsScreen.navigationOptions = () => {
  return {
    title: "HaravanInventory"
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
