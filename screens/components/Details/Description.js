import React, { Component } from 'react';
import { Image, ImageBackground, Text, View, StyleSheet,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {Left, Thumbnail, Body, List, ListItem} from 'native-base'

export default class Description extends Component {
  render() {
    return (
      <View style={{margin:15}}>
        
       <Text>Funcionamento:</Text>
       <Text>Segunda a Sexta das 07:00 as 20:00</Text>
       <Text>Sábados das 08:00 as 16:00</Text>
       <Text>Domingos: Fechado</Text>
       <Text>Feriados: 08:00 as 12:00</Text>
       
       <Text>Telefone: 16 99359 4432</Text>

       <Text>Descrição:</Text>

        
      </View>
          
    );
  }
}

const style = StyleSheet.create({
  
  
})