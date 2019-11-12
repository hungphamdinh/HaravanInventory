import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CheckBox } from 'react-native-elements';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
export default class NewOptionItem extends React.Component {
    constructor(props) {
        super(props)
        this.state={
           // listOption: this.props.option,
            listNewOption:this.props.newOption,
        }
    }
    renderNewOptionItem = ({ item }) => {
        return (
            <View style={styles.messeageView} >
                <Image
                    source={{ uri: item.avatar_url }}
                    style={styles.imageNewFeed}
                    resizeMode='contain'
                />

                <View style={styles.detailArea}>
                    <View style={styles.row}>
                        <View style={{flex:0.55,justifyContent:'center'}}>
                        <Text style={styles.label}>{item.first_name}</Text>
                        </View>
                        <View style={{flex:0.45}}>
                        </View>
                    </View>
                    <Text style={styles.info}>Giá: {item.price}</Text>
                    <Text numberOfLines={2} style={styles.info}>Ngày bắt đầu: {item.date_begin}</Text>
                    <Text numberOfLines={2} style={styles.info}>Ngày kết thúc: {item.date_end}</Text>

                </View>

            </View>
        )
    }
    render() {
       
        return (
            <View>
            <View style={{ alignItems: 'flex-end' }}>
            </View>
            <this.renderNewOptionItem item={this.state.listNewOption}/>
        </View>

        )
    }
}
const styles = StyleSheet.create({
    btnDrawer: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
    messeageView: {
        marginHorizontal: 10,
        alignItems:'center',
        flexDirection: 'row',
        flex: 1,
    },
    containerFlex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        // marginTop: 40,
        alignItems: 'center',
        // backgroundColor: '#fff',
        justifyContent: 'center',

    },
    header: {
        height: 30,
        width: '100%',
        backgroundColor: 'pink'
    },
    detailArea: {
        marginVertical: 20,
        marginLeft: 10,
        width: 200,
        flexDirection: 'column',
    },
    row: {
        flexDirection: 'row'

    },
    rowOption: {
        flexDirection: 'row',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#DEDCDC',

        flex: 1,
    },
    label: {
        fontSize: 16,
        color: 'black',
        marginRight: 10,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 16,
        color: 'grey'
    },
    imageNewFeed: {
        // flex: 1,
        width: 80,
        height: 140,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
        //backgroundColor:'red',
    },
    invenArea: {
        flex: 0.5,

    },
    btnRegister: {
        flex: 1,
        width: 100,
        height: null,
        // borderRadius: 20,
        backgroundColor: 'rgb(71,113,246)',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        elevation: 20,
        marginLeft: 10,
        color: '#fff'
    },
    ckBox: {
        width: 90,
        height: 40,
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: '#fff',
        borderWidth: 0,
    },
    btnCheckAllCkb: {
        width: 100,
        height: 30,
        // borderRadius: 20,
        marginTop: 5,
        backgroundColor: 'rgb(71,113,246)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    txtCheckAll: {
        color: '#fff',
        fontSize: 16,
    }
});  