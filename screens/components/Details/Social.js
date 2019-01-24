import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Social extends Component {
  render() {
    return (

      
          <View style={stDetails.containerDetailSocial}>
            

            <View style={stDetails.boxDetailSocial}>
            <Icon name='logo-facebook' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon name='logo-instagram' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon name='logo-twitter' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon name='logo-google' size={40}></Icon>
            </View>


          </View>
    );
  }
}

const stDetails = StyleSheet.create({
  
  containerDetailSocial: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    marginTop: 30,

  },
  boxDetailSocial: {
    flex:1,
    height: 60,
    margin:15,
    //backgroundColor:'#dddddd',
    justifyContent:'center',
    flexDirection:'row',
  }
})