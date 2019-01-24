import React, { Component } from 'react';
import { ScrollView, Image, Text, View, StyleSheet,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import Social from './components/Details/Social'
import Cover from './components/Details/Cover'
import Description from './components/Details/Description';

export default class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      estab: [],
    }
  }
   
  rendeItem() {
    const idElement = this.state.estabelecimentos.map(item =>{
      const {nomeEC} = item
      const {idEC} = item
      const {logoEC} = item
      return <ListItem >
          <Left>
            <Thumbnail square source={{ uri:logoEC}} />
          </Left>
          <Body>
            <Text >{nomeEC}</Text>
            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
          </Body>
          <Right>
            <Button transparent onPress={() => Linking.openURL('facebook.com/iuriferreira')} thumbnail >
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>


    })

    return idElement
  }
 
  
  render() {
    return (
          <View>
            <Text>
              {this.rendeItem()}
            </Text>
            <ScrollView>
            
            <Cover></Cover>
            <Description></Description>
            <Social></Social>
            
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
})