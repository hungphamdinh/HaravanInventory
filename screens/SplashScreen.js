// screens/SplashScreen.js
import React from 'react';
import {Image, View, Text,StyleSheet } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
const FIVE_SECONDS = 5000;

export default class SplashScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      percentProgress:0,
    }
  }
  componentDidMount() {
    // When mounted, wait one second, then navigate to App
    setTimeout(() => {
      // Components that are placed inside a React Navigation
      // navigator will receive the `navigation` prop.
      // It's main usage is to trigger navigation events.
      // Right here we're telling it to navigate to the route
      // with the name 'App'.
      this.props.navigation.navigate('Login');
    }, 2500);
   this.increasePercentage(this.state.percentProgress);
  }
  increasePercentage=(percentProgress)=>{
  //  const seta;
    for (var i=0;i<=9;i++) {
      ((ind)=> {
          setTimeout(()=>{
            percentProgress=percentProgress+10;           
            this.setState({percentProgress})
  //          console.log(percentProgress)
            
          }, 100 * ind);
      })(i);
        this.setState({percentProgress})
   }
   
  }
  componentWillUnmount() {
    // we set the timeout to this.turnOffRedTimeout so that we can
    // clean it up when the component is unmounted.
    // otherwise you could get your app trying to modify the state on an
    // unmounted component, which will throw an error
    clearTimeout(this.turnOffSetTimeout);
  }
  turnOffSetTimeout=()=>{
    this.setState({percentProgress:0})
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
      
     <View>
    <PercentageCircle 
    radius={100}
    borderWidth	={6}
    percent={      
      this.state.percentProgress
    }
    color={"#3498db"}>
        <Image
          source={ require('../assets/images/spartan-logo.png') }
          style={styles.imageNewFeed}

          resizeMode='contain'
      
        />
      </PercentageCircle>  
  </View>

      </View>

     
    );
  }
}
const styles=StyleSheet.create({
  imageNewFeed: {
   // flex: 1,
    width: 150,
    height: 150,
    marginHorizontal:10,
    justifyContent: 'center',
    //backgroundColor:'red',
  },
})

