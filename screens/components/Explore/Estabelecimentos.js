import React, { Component } from 'react';
import { Container, Content, List, ListItem, Badge, Thumbnail, Text, Left, Body, Right, Button, Item } from 'native-base';
import Detail from '../../Detail'
import {Linking, RefreshControl, ScrollView} from 'react-native'
import { withNavigation } from 'react-navigation';
import Inbox from '../../Inbox';
import api from '../services/api'
import axios from 'axios'

class Estabelecimentos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estabelecimentos: [],
    }
  }
   
  
  
  componentDidMount() {
      axios
          .get('https://hellobotapi.glitch.me/ECs')
          .then(response => { 
            const {results} = response.data
            this.setState({
              estabelecimentos: results
            })
          })
  }
  
 
  renderList() {
    const textElements = this.state.estabelecimentos.map(estab =>{
      const {nomeEC} = estab
      const {idEC} = estab
      const {logoEC} = estab

      
      return <ScrollView key={idEC} refreshControl = {
        <RefreshControl>
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh}
        </RefreshControl>
      }><ListItem  key = {idEC} onPress={() => this.props.navigation.navigate('Detail', {estab}) } thumbnail>
          <Left>
            <Thumbnail square source={{ uri:logoEC}} />
          </Left>
          <Body>
            <Text >{nomeEC}</Text>
            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
          </Body>
          <Right>
            
              <Badge style={{backgroundColor:'purple'}}>
              <Text >{estab.cashbackEC}%</Text>
              </Badge>
            
          </Right>
        </ListItem>
        </ScrollView>
      


    })

    _onRefresh = () => {
      this.setState({refreshing: true});
      renderList.then(() => {
        this.setState({refreshing: false});
      });
    }
    

    return textElements
  }

  
 
  render() { 
  

    return (
        <List style={{marginTop: 10}}>
          
          {this.renderList()}

          </List >


      
    );
  }
}

export default withNavigation(Estabelecimentos);



