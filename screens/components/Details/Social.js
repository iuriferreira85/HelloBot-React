import React, { Component } from 'react';
import {View, StyleSheet, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Social extends Component {
  render() {
    return (

      
          <View style={stDetails.containerDetailSocial}>
            

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('fb://hellobotbr')} name='logo-facebook' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('instagram://user?username=hellobotbr')} name='logo-instagram' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('twitter://timeline')} name='logo-twitter' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('https://www.ifood.com.br/delivery/ribeirao-preto-sp/montana-grill-ribeirao-shopping-jardim-california')} name='logo-google' size={40}></Icon>
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