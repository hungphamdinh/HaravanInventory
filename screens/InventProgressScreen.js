// ./screens/GroupsScreen.js
import React from "react";
import { Image, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import InventItem from "../components/InventoryItem";
import OptionItem from "../components/OptionItem";
import production from "../utils/production.json";
import option from "../utils/option.json";
import Modal from "react-native-modalbox";
import NewOptionItem from "../components/NewOptionItem";
import NewInventItem from "../components/NewInventItem";
export default class InventProgressScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: production,
      listOption: option,
      checked: false,
      disableNextBtn: true,
      listNewOption: [],
      listNewInvent: {}
    };
  }
  // componentDidMount=()=>{
  //     console.log(this.state.listNewOption);
  //     console.log(this.state.listNewProduct);
  // }
  // addNewOptionItem = (newItem) => {
  //     // you can add new Item from a child.
  //     this.setState(({ listNewOption: newItem }));
  // }
  onNextBtnInvent = () => {
    const itemCheck = this.state.listProduct.every(item => {
      if (item.is_check === false) {
        item = true;
      } else {
        item = false;
      }
      return item;
    });
    this.setState({ disableNextBtn: itemCheck });
  };
  onNextBtnOption = () => {
    const itemCheck = this.state.listOption.every(item => {
      if (item.is_check === false) {
        item = true;
      } else {
        item = false;
      }
      return item;
    });
    this.setState({ disableNextBtn: itemCheck });
  };
  onAddNewItemToCheck = () => {
    const NewOption = this.state.listOption.filter(item => {
      if (item.is_check == true) {
        return item;
      }
      return;
    });
    const listNewInvent = this.state.listProduct.filter(item => {
      if (item.is_check == true) {
        return item;
      }
      return;
    });
    this.setState({ listNewInvent: listNewInvent, listNewOption: NewOption });
  };
  onProductDetail = id => {
    const pView = this.state.listProduct.find(pIndex => pIndex.id === id);
    // console.log(pView)
    setTimeout(() => {
      this.props.navigation.navigate("ProductDe", {
        updatedProduct: pView
      });
    }, 1000);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* //<ModalBox/> */}
        <ProgressSteps
          completedProgressBarColor={"#007aff"}
          completedStepIconColor={"#007aff"}
          activeStepIconColor={"#007aff"}
          activeLabelColor={"#007aff"}
          activeStepNumColor={"#fff"}
          activeStepIconBorderColor={"#007aff"}
        >
          <ProgressStep
            nextBtnStyle={styles.progessNextBtn}
            nextBtnTextStyle={styles.progessNextBtnText}
            scrollViewProps={{
              keyboardShouldPersistTaps: 'handled',
              contentContainerStyle: {
                flex: 1,
                justifyContent: 'center'
              }
            }}
            previousBtnDisabled={true}
            onNext={this.onNextBtnOption}
            nextBtnDisabled={this.state.disableNextBtn}
            nextBtnText="Tiếp theo"
            //  onPrevious={this.onPreviousNotNull}
            label="Sản phẩm"
          >
            <View style={{ alignItems: "center" }}>
              <InventItem
                production={this.state.listProduct}
                addNewInventItem={this.addNewInventItem}
                onNextBtnInvent={this.onNextBtnInvent}
              />
            </View>
          </ProgressStep>

          <ProgressStep
            nextBtnStyle={styles.progessNextBtn}
            nextBtnTextStyle={styles.progessNextBtnText}
            previousBtnStyle={styles.progessPreBtn}
            label="Tiện ích"
            nextBtnDisabled={this.state.disableNextBtn}
            onNext={this.onAddNewItemToCheck}
            nextBtnText="Tiếp theo"
            previousBtnText="Quay lại"
          >
            <View style={{ alignItems: "center" }}>
              <OptionItem
                option={this.state.listOption}
                //  newOption={this.state.listNewOption}
                addNewOptionItem={this.addNewOptionItem}
                onNextBtnOption={this.onNextBtnOption}
              />
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={styles.progessNextBtn}
            nextBtnTextStyle={styles.progessNextBtnText}
            previousBtnStyle={styles.progessPreBtn}
            label="Kiểm tra"
            previousBtnText="Quay lại"
            nextBtnText="Tiếp theo"
          >
            <View style={{ alignItems: "center", flexDirection: "column" }}>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.label}>Tiện ích đã chọn</Text>
                <NewOptionItem listNewOption={this.state.listNewOption} />
              </View>
              <View style={{ flex: 0.5 }}>
                <Text style={styles.label}>Sản phẩm đã chọn</Text>
                <NewInventItem listNewInvent={this.state.listNewInvent} />
              </View>
            </View>
          </ProgressStep>
          <ProgressStep
            nextBtnStyle={styles.progessNextBtn}
            nextBtnTextStyle={styles.progessNextBtnText}
            previousBtnStyle={styles.progessPreBtn}
            label="Bước 4"
            previousBtnText="Quay lại"
            finishBtnText="Hoàn tất"
          >
            <View style={{ alignItems: "center" }}>
              <Text>This is the content within step 4!</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}
const buttonTextStyle = {
  color: "#393939"
};

InventProgressScreen.navigationOptions = () => {
  return {
    title: "HaravanInventory"
  };
};

const styles = StyleSheet.create({
  btnDrawer: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  messeageView: {
    marginHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  containerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    // marginTop: 40,
    alignItems: "center",
    // backgroundColor: '#fff',
    justifyContent: "center"
  },
  header: {
    height: 30,
    width: "100%",
    backgroundColor: "pink"
  },
  detailArea: {
    marginVertical: 20,
    marginLeft: 10,
    width: 200,
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  rowOption: {
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#DEDCDC",

    flex: 1
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
    fontWeight: "bold"
  },
  info: {
    fontSize: 16,
    color: "grey"
  },
  imageNewFeed: {
    // flex: 1,
    width: 80,
    height: 140,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor:'red',
  },
  invenArea: {
    flex: 0.5
  },
  ckBox: {
    width: 90,
    height: 40,
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: "#fff",
    borderWidth: 0
  },
  btnCheckAllCkb: {
    width: 100,
    height: 30,
    // borderRadius: 20,
    marginTop: 5,
    backgroundColor: "rgb(71,113,246)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  txtCheckAll: {
    color: "#fff",
    fontSize: 16
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
    justifyContent: "center",
    alignItems: "center"
  },
  progessNextBtnText: {
    color: "white"
  },
  progessNextBtn: {
    borderColor: "deepskyblue",
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'deepskyblue',
    marginVertical: 0,
  },
  progessPreBtn: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "deepskyblue"
  }
});
