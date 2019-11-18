// ./screens/GroupsScreen.js
import React from "react";
import {
  Picker,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, Icon, Button } from "react-native-elements";
import inventory from "../utils/inventory.json";
import RadioGroup from "react-native-radio-buttons-group";
import option from "../utils/option.json";
import RNPickerSelect from "react-native-picker-select";
import SwiperFlatList from "react-native-swiper-flatlist";
import Spinner from "react-native-loading-spinner-overlay";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listInventory: inventory,
      listOption: option,
      value: "first",
      spinner: false,
      data: [
        {
          label: "Mua 1 tặng 1",
          size: 12
        },
        {
          label: "Giảm 10%",
          value: "I'm not same as label",
          size: 12
        },
        {
          label: "Combo gói ...",
          // color: 'green',
          size: 12
        }
      ]
    };
  }

  onOptionGo = id => {
    const opView = this.state.listOption.find(mIndex => mIndex.id === id);
    this.setState({ spinner: true });
    //console.log(opView)
    setTimeout(() => {
      this.setState({ spinner: false });
      this.props.navigation.navigate("DetailOption", {
        updateMessage: opView
      });
    }, 1000);
  };
  onPress = data => this.setState({ data });
  renderInventoryItem = ({ item }) => {
    //console.log(item);
    return (
      <View style={styles.columnOption}>
        <Spinner
          visible={this.state.spinner}
          textContent={"Loading..."}
          textStyle={styles.spinnerTextStyle}
        />
        {/* <View style={styles.inventImage}> */}
        <Image
          source={{ uri: item.avatar_url }}
          style={styles.imageNewFeedTop5}
          resizeMode="cover"
        />
        {/* </View> */}
        <View style={styles.detailAreaTop5}>
          <View style={{ marginLeft: 20 }}>
            <View style={styles.row}>
              <Text style={styles.label}>{item.first_name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.info}>Giá: </Text>
              <Text style={styles.info}>50.000 vnđ</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.info}>Số lượng: </Text>
              <Text numberOfLines={2} style={styles.info}>
                {item.quantity}{" "}
              </Text>
            </View>
            <View style={styles.optionArea}>
              <Picker
                selectedValue={this.state.language}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ language: itemValue })
                }
              >
                <Picker.Item label="Mua 1 tặng 1" value="java" />
                <Picker.Item label="Khuyến mãi mùa hè" value="js1" />
                <Picker.Item label="Combo gói ..." value="js2" />
              </Picker>

              <TouchableOpacity style={styles.btnCheckOption}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Bật tính năng
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  renderOptionItem = ({ item }) => {
    //  console.log(item.id);
    return (
      <View style={styles.rowOption}>
        <Image
          source={{ uri: item.avatar_url }}
          style={styles.imageNewFeed}
          resizeMode="contain"
        />
        <View style={{ flex: 0.7 }}>
          <View style={styles.detailAreaTop3}>
            <Text style={styles.label}>{item.first_name}</Text>
            <Text style={styles.info}>{item.price}</Text>
          </View>
        </View>
        <View style={{ flex: 0.3 }}>
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => this.onOptionGo(item.id)}
          >
            <Text style={{ color: "#fff" }}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.containerArea}>
        <View style={{ flex: 0.65 }}>
          <Card style={styles.container}>
            <Text style={{ marginBottom: 10 }}>Top 5 sản phẩm tồn kho:</Text>
            <SwiperFlatList
              horizontal={true}
              data={this.state.listInventory}
              renderItem={this.renderInventoryItem}
              keyExtractor={item => item.email}
              autoplay
              paginationStyleItem={styles.dotSwipe}
              autoplayDelay={2}
              autoplayLoop
              index={2}
              showPagination
            />
          </Card>
        </View>
        <View style={{ flex: 0.35, marginBottom: 10 }}>
          <Card style={styles.container}>
            <Text style={{ marginBottom: 10 }}>Top 3 tiện ích:</Text>
            <SwiperFlatList
              horizontal={true}
              data={this.state.listOption}
              renderItem={this.renderOptionItem}
              keyExtractor={item => item.avatar_url}
              autoplay
              autoplayDelay={2}
              paginationStyleItem={styles.dotSwipe}
              autoplayLoop
              index={2}
              showPagination
            />
          </Card>
        </View>
      </View>
    );
  }
}

HomeScreen.navigationOptions = props => {
  return {
    title: "Trang chủ",
    headerLeft: () => {
      return (
        <TouchableOpacity onPress={props.navigation.openDrawer}>
          <Image
            style={styles.btnDrawer}
            source={{
              uri:
                "https://cdn3.iconfinder.com/data/icons/ui-ux-essentials-solid/24/hamburger-menu-solid-512.png"
            }}
          />
        </TouchableOpacity>
      );
    }
  };
};

const styles = StyleSheet.create({
  btnDrawer: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  containerFlex: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  containerArea: {
    flex: 1
    // marginTop: 40,
    // alignItems: 'center',
    // backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  container: {
    // flex: 1,
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
  detailAreaTop3: {
    marginVertical: 20,
    marginLeft: 10,
    width: 110,
    flexDirection: "column"
  },
  detailAreaTop5: {
    marginVertical: 5,
    width: 280,
    marginBottom: 20,
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
    marginHorizontal: 10,
    flex: 1
  },
  columnOption: {
    flexDirection: "column",
    borderStyle: "solid",
    borderWidth: 1,
    width: 280,
    borderColor: "#DEDCDC",
    marginHorizontal: 10,
    flex: 1
  },
  label: {
    fontSize: 16,
    color: "black",
    marginRight: 10,
    fontWeight: "bold"
  },
  name: {
    fontSize: 8,
    color: "black",
    fontWeight: "bold"
  },
  info: {
    fontSize: 16,
    color: "grey"
  },
  imageNewFeedTop5: {
    //flex: 1,
    //width: 80,
    height: 120,
    alignItems: "center",
    justifyContent: "center"
    //backgroundColor:'red',
  },
  imageNewFeed: {
    //flex: 1,
    width: 70,
    justifyContent: "center"
    //backgroundColor:'red',
  },
  invenArea: {
    flex: 0.5
  },
  btnRegister: {
    flex: 1,
    width: 70,
    height: null,
    // borderRadius: 20,
    backgroundColor: "rgb(71,113,246)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    marginLeft: 10,
    color: "#fff"
  },
  btnCheckOption: {
    width: 100,
    height: 30,
    // borderRadius: 20,
    marginTop: 5,
    backgroundColor: "rgb(71,113,246)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    color: "#fff"
  },
  optionArea: {
    justifyContent: "flex-start",
    //marginLeft:20,
    flexDirection: "row"
  },
  dotSwipe: {
    height: 8,
    width: 8
    //backgroundColor:'rgb(71,113,246)',
  },
  spinnerTextStyle: {
    color: "#FFF"
  }
});
