import React from "react";
import { Image, View, Text, ScrollView, StyleSheet } from "react-native";
export default function ProfileDetailScreen(props) {

    const  avatar_url = props.navigation.getParam('updateProfile');
    //console.log(props.navigation.getParam('updatedProfile'))
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: avatar_url }}
                style={{
                    width: null,
                    height: 300,
                }}
                resizeMode='contain'
            />
          

        </View>
    );

}
//alert(props.navigation.getParam('updateMessage'));
ProfileDetailScreen.navigationOptions = {
    titile: "Chi tiết"
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