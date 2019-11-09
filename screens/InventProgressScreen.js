// ./screens/GroupsScreen.js
import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { FlatList } from "react-native-gesture-handler";
import { CheckBox } from 'react-native-elements';
import CustomCheckbox from '../screens/CustomCheckbox';
import InventItem from '../components/InventoryItem'
import OptionItem from '../components/OptionItem'
import production from '../utils/production.json'
import option from '../utils/option.json'

export default class InventProgressScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduct: production,
            listOption: option,
            checked: false,
            listNewOption: {},
        }
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
    // componentWillReceiveProps(nextProps) {
    //     const { listProduct: nextProduct } = nextProps;
    //     const { listProduct } = this.props;

    //     if (nextProduct !== listProduct) {
    //         this.setState({ listProduct: nextProduct });
    //     }
    //   }
    
    renderOptionItem = ({ item }) => {
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
                        <CheckBox
                            key={item.id}
                            onPress={() => this.onCheckOption(item)}
                            title='Chọn'
                            checked={item.is_check}
                            //progressBarColor={'#007aff'}
                            containerStyle={styles.ckBox}
                        />
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
        // console.log(this.state.listProduct);
        //console.log(this.state.listProduct);
        return (

            <View style={{ flex: 1 }}>
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
                            <InventItem production={this.state.listProduct} />
                        </View>
                    </ProgressStep>

                    <ProgressStep label="Tiện ích" >
                        <View style={{ alignItems: 'center' }}>
                            <OptionItem option={this.state.listOption}
                                newOption={this.state.listNewOption}
                            />
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Kiểm tra" >
                        <View style={{ alignItems: 'center', flexDirection: 'column' }}>
                            <View style={{ flex: 0.5 }}>
                            <OptionItem option={this.state.listOption}
                                newOption={this.state.listNewOption}
                            />
                            </View>
                            <View style={{ flex: 0.5 }}>
                            <InventItem production={this.state.listProduct} />
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
//const mapStateToProps = ({ reducer: listProduct }) => ({ listProduct });
// export default connect(mapStateToProps)(InventProgressScreen);
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
    }
});  
