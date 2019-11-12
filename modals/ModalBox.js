import Modal from 'react-native-modalbox';
import { Button, CheckBox } from 'react-native-elements';
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import React from "react";
export default class modalbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
            sliderValue: 0.3
        }
    }
    render() {
        return (
            <View>
                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.text}>Modal centered</Text>
                    <Button title={`Disable (${this.state.isDisabled ? "true" : "false"})`} onPress={() => this.setState({ isDisabled: !this.state.isDisabled })} style={styles.btn} />
                </Modal>
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
    modal3: {
        height: 300,
        width: 300
    },
    text: {
        color: "black",
        fontSize: 22
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});  