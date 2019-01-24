import React, {Component} from 'react'
import {View, Text, Stylesheet, Image} from 'react-native'

class HotPromo extends React.Component {
    render() {
        return (
            <View style={{height:130, width:94, marginLeft:10}}>
              <View style={{flex:2, backgroundColor:'red'}} > 
                    <Image source={this.props.imageUri}
                     style={{flex:1, width:null, height:null, resizeMode:'cover'}}/>
                </View>
                <View style={{flex:1, paddingLeft:10, paddingTop:10}}>
                    <Text>{this.props.name}</Text>
                    <Text>Receba na comodidade da sua casa com FRETE GRÁTIS!</Text>
               </View>
            </View>
        )
    }
}

export default HotPromo