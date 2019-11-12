// ./screens/GroupsScreen.js
import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FlatList } from "react-native-gesture-handler";
import { Button, CheckBox } from 'react-native-elements';
import CustomCheckbox from '../screens/CustomCheckbox';
import InventItem from '../components/InventoryItem';
import OptionItem from '../components/OptionItem';
import production from '../utils/production.json';
import option from '../utils/option.json';
import Modal from 'react-native-modalbox';
import NewOptionItem from '../components/NewOptionItem';
import NewInventItem from '../components/NewInventItem'
export default class InventProgressScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduct: production,
            listOption: option,
            checked: false,
            listNewOption: {},
            listNewProduct: [],
        }
    }
    addNewOptionItem = (newItem) => {
        // you can add new Item from a child.
        this.setState(({ listNewOption: newItem }));
    }
    addNewInventItem = (newItem) => {
        // you can add new Item from a child.
        //this.setState(({ listNewProduct:  newItem}));
        this.setState(prevState => ({ listNewProduct: [...prevState.listNewProduct, newItem] }));

        console.log(this.state.listNewProduct)
    }
    onProductDetail = id => {
        const pView = this.state.listProduct.find(pIndex => pIndex.id === id);
        // console.log(pView)
        setTimeout(() => {
            this.props.navigation.navigate('ProductDe', {
                'updatedProduct': pView
            });
        }, 1000);
    };


    render() {
        //console.log(this.state.listProduct);
        return (

            <View style={{ flex: 1 }}>
                {/* //<ModalBox/> */}
                <ProgressSteps
                    completedProgressBarColor={'#007aff'}
                    completedStepIconColor={'#007aff'}
                    activeStepIconColor={'#007aff'}
                    activeLabelColor={'#007aff'}
                    activeStepNumColor={'#fff'}
                    activeStepIconBorderColor={'#007aff'}
                >

                    <ProgressStep
                        previousBtnDisabled={true}
                        //  onPrevious={this.onPreviousNotNull} 
                        label="Sản phẩm">
                        <View style={{ alignItems: 'center' }}>
                            <InventItem production={this.state.listProduct}
                                addNewInventItem={this.addNewInventItem}
                            />
                        </View>

                    </ProgressStep>

                    <ProgressStep label="Tiện ích" >
                        <View style={{ alignItems: 'center' }}>
                            <OptionItem option={this.state.listOption}
                                //  newOption={this.state.listNewOption}
                                addNewOptionItem={this.addNewOptionItem}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Kiểm tra" >
                        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{ flex: 0.5 }}>
                                <Text style={styles.label}>Tiện ích đã chọn</Text>
                                <NewOptionItem newOption={this.state.listNewOption} />
                            </View>
                            <View style={{ flex: 0.5 }}>
                                <Text style={styles.label}>Sản phẩm đã chọn</Text>
                                <NewInventItem newInvent={this.state.listNewProduct} />
                            </View>
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Bước 4" >
                        <View style={{ alignItems: 'center' }}>
                            <Text>This is the content within step 4!</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>

            </View>
        );
    }
}
const buttonTextStyle = {
    color: '#393939',

};

InventProgressScreen.navigationOptions = () => {

    return {

        title: "HaravanInventory",

    };
};

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
        justifyContent: 'center',
        alignItems: 'center'
    },
});  
