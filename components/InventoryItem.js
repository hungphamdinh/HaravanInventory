import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button, CheckBox } from 'react-native-elements';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Modal from 'react-native-modal';
export default class InventoryItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduct: this.props.production,
            newItem: [],
            isModalVisible: false,
            modalItem: {},
        }
    }
    toggleModal = (item) => {
        console.log(item)
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            modalItem: item,
        });
        //    console.log(this.state.modalItem);
    };

    onCheck = (itemCheck) => {
        //  console.log(itemCheck);
        const updateProduct = this.state.listProduct.map(item => {
            //console.log(id);
            if (item.id === itemCheck.id) {
                if (item.is_check == true) {
                    item.is_check = false;
                }
                else {
                    item.is_check = true;
                }
            }
            return item;
        });


        const newUpdateProduct = [...updateProduct];
        this.props.onNextBtnInvent();

        this.setState({ listProduct: updateProduct });

    }
    onAllCheck = (id) => {
        //console.log(id);
        const updateProduct = this.state.listProduct.map(item => {
            for (var i = 0; i < id.length; i++) {
                if (item.id === id[i]) {
                    if (item.is_check == false) {
                        item.is_check = true;
                    }
                    //                     else {
                    //                        // item.is_check = true;
                    //                         // var arrNewItem=[];
                    //                         // arrNewItem=arrNewItem.push(item.is_check);
                    //                         // item=arrNewItem;
                    //   //                      this.props.addNewInventItem(item);
                    //   //                      this.props.onCheckBoxInvent(item);                     
                    //                     }
                }
            }
            return item;
        });

        // const newUpdateProduct = [...updateProduct];
        //console.log(updateProduct)
        this.props.onNextBtnInvent();

        this.setState({ listProduct: updateProduct });

    }
    openModalBox = () => {
        const item = this.state.modalItem;
        //console.log(item)
        return (
            <Modal
                onBackdropPress={() => this.setState({ isModalVisible: false })}
                backdropOpacity={0.2}
                isVisible={this.state.isModalVisible}>
                <View style={styles.modal}>
                    <Image
                        source={{ uri: item.avatar_url }}
                        style={styles.imageNewFeed}
                        resizeMode='contain'
                    />
                    <View style={styles.detailArea}>

                        <View style={styles.row}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.label}>{item.first_name}</Text>
                            </View>
                        </View>
                        <Text style={styles.info}>Giá: {item.price}</Text>
                        <Text style={styles.info}>{item.last_message_content}</Text>

                    </View>
                </View>
            </Modal>
        )
        //}
    }
    renderInventory = ({ item }) => {

        return (

            <TouchableOpacity style={styles.messeageView} onPress={() => this.toggleModal(item)}>
                <Image
                    source={{ uri: item.avatar_url }}
                    style={styles.imageNewFeed}
                    resizeMode='contain'
                />

                <this.openModalBox />
                <View style={styles.detailArea}>

                    <View style={styles.row}>
                        <View style={{ flex: 0.55, justifyContent: 'center' }}>
                            <Text style={styles.label}>{item.first_name}</Text>
                        </View>
                        <View style={{ flex: 0.45 }}>
                            <CheckBox
                                key={item.id}
                                onPress={() => this.onCheck(item)}
                                title='Chọn'
                                checked={item.is_check}
                                //progressBarColor={'#007aff'}
                                containerStyle={styles.ckBox}
                            />
                        </View>
                    </View>
                    <Text style={styles.info}>Giá: {item.price}</Text>
                    <Text numberOfLines={2} style={styles.info}>{item.last_message_content}</Text>

                </View>

            </TouchableOpacity>

        )
    }
    render() {
        return (

            <View>

                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.btnCheckAllCkb}
                        onPress={() => this.onAllCheck(this.state.listProduct.map(item => item.id))}
                    >
                        <Text style={styles.txtCheckAll}>
                            Chọn tất cả
                                </Text>
                    </TouchableOpacity>


                </View>
                <FlatList
                    data={this.state.listProduct}
                    renderItem={this.renderInventory}
                    keyExtractor={(item) => item.avatar_url}
                />

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
        alignItems: 'center',
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
        width: 100,
        height: 120,
        marginHorizontal: 10,
        //sjustifyContent: 'center',
        //alignItems: 'center'
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
    },
    modal3: {
        height: 300,
        width: 300
    },
    text: {
        color: "black",
        fontSize: 22
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        //flex: 0.5,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },

});  