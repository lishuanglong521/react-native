/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio
} from 'react-native';

// class Test1 extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('Test1', () => Test1);
var styles = StyleSheet.create({
    container:{
      marginTop:25,
      marginLeft:5,
      marginRight:5,
      height:84,
      borderRadius:5,
      padding:2,
      backgroundColor:"#FF0067",
      flexDirection:"row",
    },
    item:{
      flex:1,
      height:80,
    },
    center:{
      justifyContent:"center",
      alignItems:"center",

    },
    flex:{
      flex:1
    },
    font:{
      color:"#FFF",
      fontSize:16,
      fontWeight:"bold",
    },
    lineLeftRight:{
      borderLeftWidth:1/PixelRatio.get(),
      borderRightWidth:1/PixelRatio.get(),
      borderColor:"#fff",
    },
    lineCenter:{
      borderBottomWidth:1/PixelRatio.get(),
      borderColor:"#fff",
    }
});

var app = React.createClass({
  render:function(){
    return(
   <View style={styles.flex}>   
    <View style={styles.container}>
      <View style={[styles.item,styles.center]}><Text style={styles.font}>酒店</Text></View>
      <View style={styles.item,styles.lineLeftRight}>
        <View style={[styles.center,styles.flex,styles.lineCenter]}><Text style={styles.font}>海外酒店</Text></View>
        <View style={[styles.center,styles.flex]}><Text style={styles.font}>特惠酒店</Text></View>
      </View>
      <View style={styles.item}>
        <View style={[styles.center,styles.flex,styles.lineCenter]}><Text style={styles.font}>团购</Text></View>
        <View style={[styles.center,styles.flex]}><Text style={styles.font}>客栈.公寓</Text></View>
      </View>
    </View>
  </View>
    )
  }
});
    

AppRegistry.registerComponent('Test1', () => app);
