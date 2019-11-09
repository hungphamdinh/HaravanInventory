import { Image, Text, TouchableOpacity, View, Platform, StyleSheet } from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
export default class Drawer extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
  //  const { params } = this.props.navigation.state;
  //  const { goBack } = this.props.navigation;
    return (
      <View style={styles.drawerContainer}>

        <View style={styles.drawerHeader}>
          <Image
            source={{ uri: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-add-user-icon-png-image_3773557.jpg'}}
            style={styles.profilePic}
            resizeMode='contain'
          />
          <Text style={styles.txtName}>Nguyễn Văn A</Text>
          <Text style={styles.txtMail}>anguyenvan@gmail.com</Text>

        </View>
        <View style={styles.drawerBody}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.goBack();      
          }}>
            <View style={styles.row}>
              <Ionicons style={styles.iconDrawer}
                name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                size={26}
              />
              <View style={styles.contentDrawer}>
                <Text style={styles.content}>
                  Trang chủ
              </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Production', {
              options: { bottomTabs: { visible: false, drawBehind: true, animate: true } }
            });
          }}>
            <View style={styles.row}>
              <Ionicons style={styles.iconDrawer}
                name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
                size={26}
              />
              <View style={styles.contentDrawer}>
                <Text style={styles.content}>
                  Danh sách sản phẩm
              </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('InventProgress', {
              options: { bottomTabs: { visible: false, drawBehind: true, animate: true } }
            });
          }}>
            <View style={styles.row}>
              <Ionicons style={styles.iconDrawer}
                name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'}
                size={26}
              />
              <View style={styles.contentDrawer}>
                <Text style={styles.content}>
                  Tồn kho
              </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('AboutUs', {
              options: { bottomTabs: { visible: false, drawBehind: true, animate: true } }
            });
          }}>
            <View style={styles.row}>
              <Ionicons style={styles.iconDrawer}
                name={Platform.OS === 'ios' ? 'ios-happy' : 'md-happy'}
                size={26}
              />
              <View style={styles.contentDrawer}>
                <Text style={styles.content}>
                  Về chúng tôi
              </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Contact', {
              options: { bottomTabs: { visible: false, drawBehind: true, animate: true } }
            });
           // this.props.navigation.goBack();
          }}>
            <View style={styles.row}>
              <Ionicons style={styles.iconDrawer}
                name={Platform.OS === 'ios' ? 'ios-contacts' : 'md-contacts'}
                size={26}
              />
              <View style={styles.contentDrawer}>
                <Text style={styles.content}>
                  Liên hệ
              </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {

            this.props.navigation.popToTop();
          }}>
            <View style={styles.row}>
              <Ionicons style={styles.iconDrawer}
                name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'}
                size={26}
              />
              <View style={styles.contentDrawer}>
                <Text style={styles.content}>
                  Đăng xuất
              </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  drawerHeader: {
    flex: 0.3,
    justifyContent: 'flex-end',
    marginLeft: 10,
  },
  drawerBody: {
    flex: 0.7,
  },
  profilePic: {
    width: 80,
    height: 80,
    //flex:1,
    marginHorizontal: 5,
    borderRadius: 25,
  },
  txtName: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtMail: {
    fontSize: 15,
  },
  iconDrawer: {
    marginBottom: -3,
    color: 'black',
    flex:0.2,
  },
  content: {
    fontSize: 15,
  },
  contentDrawer: {
    flex:0.8,
  }
});