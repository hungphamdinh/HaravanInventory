import React from "react";
import { Image, View, Text, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class StatisticScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Thống kê</Text>
            </View>
        );
    }
}

//alert(props.navigation.getParam('updateMessage'));
StatisticScreen.navigationOptions = {
        title: "HaravanInventory",
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        flexDirection: 'column',
        backgroundColor: "#fff"
    },
    contentContainer: {
        alignItems: "center",
        justifyContent: "center"
    }
});