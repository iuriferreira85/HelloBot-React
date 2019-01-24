import React, { Component } from 'react';
import { Image, ImageBackground, Text, View, StyleSheet,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {Left, Thumbnail, Body, List, ListItem} from 'native-base'

export default class Cover extends Component {
  render() {
    return (
      <View>
        
        <ImageBackground source={{uri: 'http://www.vivermentecerebro.com.br/noticias/img/a_intima_relacao_entre_comida_e_humor_1__2016-05-09175545.jpg'}} style={{height: 200, }}/>
        <List>
        <ListItem  thumbnail >
            <Left>
              <Thumbnail square source={{ uri:'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cf/Logotipo_do_Burger_King.svg/1024px-Logotipo_do_Burger_King.svg.png'}} />
            </Left>
            <Body>
              <Text style={{fontSize:20, backgroundColor:'white' }}>Burger King</Text>
              <Text note numberOfLines={1}>Lanches</Text>
            </Body>
           
          </ListItem>
         

        </List>
        
      </View>
          
    );
  }
}

const style = StyleSheet.create({
  
  
})