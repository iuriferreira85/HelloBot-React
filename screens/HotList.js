import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class HotList extends Component {
  render() {
    return (
      <Container>
        <Content>
        <Text style= {{fontSize:18, fontWeight:'700', paddingHorizontal:20, marginBottom:30, marginTop:30}}>HotList</Text>

        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.curtamais.com.br/uploads/conteudos/0758aacd86be9e10980835132f705295.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://st3.depositphotos.com/4366637/15871/i/1600/depositphotos_158717286-stock-photo-grilled-corn-on-the-table.jpg'}} style={{height: 200, width: 390, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.curtamais.com.br/uploads/conteudos/0758aacd86be9e10980835132f705295.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://st3.depositphotos.com/4366637/15871/i/1600/depositphotos_158717286-stock-photo-grilled-corn-on-the-table.jpg'}} style={{height: 200, width: 390, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.curtamais.com.br/uploads/conteudos/0758aacd86be9e10980835132f705295.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://st3.depositphotos.com/4366637/15871/i/1600/depositphotos_158717286-stock-photo-grilled-corn-on-the-table.jpg'}} style={{height: 200, width: 390, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.curtamais.com.br/uploads/conteudos/0758aacd86be9e10980835132f705295.jpg'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://st3.depositphotos.com/4366637/15871/i/1600/depositphotos_158717286-stock-photo-grilled-corn-on-the-table.jpg'}} style={{height: 200, width: 390, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}