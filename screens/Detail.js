import React, { Component } from 'react';
import { ScrollView, Image, ImageBackground, View, StyleSheet, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {Left, Thumbnail, Body, List, ListItem, Badge, Text, Right} from 'native-base'

 
export default class Detail extends Component {
  render() {
    const {navigation} = this.props
    const { estab } = navigation.state.params;
    const fb = estab.facebookEC

    return (
          <View>
            <ScrollView>
            
            <View>
        
        <ImageBackground source={{uri: estab.coverEC}} style={{height: 200, }}/>
        <List>
        <ListItem  thumbnail >
            <Left>
              <Thumbnail square source={{ uri:estab.logoEC}} />
            </Left>
            <Body>
              <Text style={{fontSize:20, backgroundColor:'white' }}>{estab.nomeEC}</Text>
              <Text note numberOfLines={1}>{estab.segmentoEC}</Text>
            </Body>
            <Right>
            <Badge style={{backgroundColor:'purple'}}>
              <Text >CashBack {estab.cashbackEC}%</Text>
              </Badge>
            </Right>
           
          </ListItem>
         

        </List>
        
      </View>
      <View style={{margin:15}}>
        
        <Text>Funcionamento:</Text>
        <Text>Segunda a Sexta das 07:00 as 20:00</Text>
        <Text>Sábados das 08:00 as 16:00</Text>
        <Text>Domingos: Fechado</Text>
        <Text>Feriados: 08:00 as 12:00</Text>
        
        <Text>Telefone: 16 99359 4432</Text>
 
        <Text>Descrição:</Text>
 
         
       </View>
       <View style={stDetails.containerDetailSocial}>
            

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('fb://'+estab.facebookEC)} name='logo-facebook' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('instagram://user?username='+estab.instagramEC)} name='logo-instagram' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('twitter://'+estab.twitterEC)} name='logo-twitter' size={40}></Icon>
            </View>

            <View style={stDetails.boxDetailSocial}>
            <Icon onPress={() => Linking.openURL('fb-messenger://m.me/'+estab.ifoodEC)} name='md-chatbubbles' size={40}></Icon>
            </View>


          </View>
            
            </ScrollView>
           
          </View>
          
    )
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
    backgroundColor:'#dddddd',
    justifyContent:'center',
    flexDirection:'row',


  },
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