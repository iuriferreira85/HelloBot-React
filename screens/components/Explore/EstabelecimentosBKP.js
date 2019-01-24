import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Item } from 'native-base';
import Detail from '../../Detail'
import {Linking, FlatList} from 'react-native'
import { withNavigation } from 'react-navigation';
import Inbox from '../../Inbox';
import api from '../services/api'

class Estabelecimentos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
  
    }
  }
  
  componentWillMount() {
    api.getECs().then((res) => {
      this.setState ({
        data: res.data,
         nameEC: res.data[0].nomeEC,
         logoEC: res.data[0].logoEC,
         

      })
    })
  }
 
  render() { 
  

    return (
          <List style={{marginTop: 10}}>
          
          <ListItem onPress={() => { this.props.navigation.navigate('Detail') }} thumbnail>
          <Left>
            <Thumbnail square source={{ uri:this.state.logoEC}} />
          </Left>
          <Body>
            <Text>{this.state.nameEC}</Text>
            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => Linking.openURL('facebook.com/iuriferreira')} thumbnail >
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>

          </List>
          
    );
  }
}

export default withNavigation(Estabelecimentos);



