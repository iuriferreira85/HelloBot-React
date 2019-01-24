import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://www.vivermentecerebro.com.br/noticias/img/a_intima_relacao_entre_comida_e_humor_1__2016-05-09175545.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
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