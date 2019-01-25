import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        SafeAreaView, 
        TextInput, 
        Platform, 
        StatusBar,
        ScrollView,
        Image, RefreshControl} from 'react-native'
 
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
import HotPromo from './components/Explore/HotPromo'
import Estabelecimentos from './components/Explore/Estabelecimentos'
import LinearGradient from 'react-native-linear-gradient'

class Explore extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          refreshing: false,
        }   
    }

    
      
    componentWillMount() {
        this.startHeaderHeight = 80
        if(Platform.OS== 'android') {
            this.startHeaderHeight = 60 + StatusBar.currentHeight
        }
    }
    
    


  render() {
    
    return (
        
      <SafeAreaView style={{flex:1}}>
      
            <View style ={{flex:1}}>
            <LinearGradient colors={['#26d6e2','#26d6e2']}>

                <View style = {{height:this.startHeaderHeight, 
                borderBottomWidth:1, borderBottomColor:'#dddddd'}}>
                    <View style={{ flex:1, display:'flex',alignItems:'center', alignContent:'center', alignSelf:'center', justifyContent:'center', 
                        flexDirection: 'row', padding:10,
                        marginHorizontal:10,
                        marginTop: Platform.OS == 'android' ? 10 : null,
                        shadowOffset: {width:0, height:0},
                        //shadowColor: 'black',
                        //shadowOpacity: 0.2,
                        //elevation:1,
                        
                    }}>

                        
                        <Text style={{flex:1, display:'flex',alignItems:'center', alignContent:'center', alignSelf:'center', justifyContent:'center', }}>Saldo: 83,00</Text>
                        
                        
                        
                        {/* <Icon name='md-search' size={20} style={{marginRight:10, alignSelf:'center' }} />
                        <TextInput
                            underlineColorAndroid='transparent'
                            placeholder='Pesquisar' 
                            placeholderTextColor='#d6d6d6'
                            style={{flex:1, fontWeight:'700', backgroundColor:'white'}}
                        /> */}

                    </View>
                </View> 
                </LinearGradient>
                <ScrollView scrollEventThrottle={16} >

                <View style={{flex:1, backgroundColor:'white', paddingTop:20,}}>
                    {/* <Text style= {{fontSize:24, fontFamily: 'Verdana', fontWeight:'700', paddingHorizontal:20}}>
                    O que nós podemos te ajudar?
                    </Text> */}
                    {/* <View style={{height:230, marginTop:20}}>
                        <ScrollView
                            horizontal={true}
                        >
                            <Category imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Entrega na faixa!' desc='Receba na comodidade da sua casa e com FRETE GRÁTIS'></Category>
                            <Category imageUri={{uri:'https://static.baratocoletivo.com.br/2018/0504/oferta_15254653071722_OFERTA_RODIZIO.jpg'}} name='Home'></Category>
                            <Category imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></Category>
                            <Category imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></Category>
                            <Category imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></Category>
                            <Category imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></Category>

                        </ScrollView>

                    </View>
                    <Text style= {{fontSize:18, fontWeight:'700', paddingHorizontal:20}}>
                    Categorias
                    </Text>
                    <View style={{height:120, marginTop:20, }}>
                        <ScrollView
                            horizontal={true}
                        >
                            <HotPromo imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></HotPromo>
                            <HotPromo imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></HotPromo>
                            <HotPromo imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></HotPromo>
                            <HotPromo imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></HotPromo>
                            <HotPromo imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></HotPromo>
                            <HotPromo imageUri={{uri:'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000w3X48EAE/59666b8ce4b0b13e46beaae3.jpg&w=620&h=400'}} name='Home'></HotPromo>

                        </ScrollView>

                    </View> */}
                    
                    <Text style= {{color:'purple',fontSize:18, fontWeight:'700', paddingHorizontal:20}}>
                    Estabelecimentos
                    </Text>
                
                </View>

                    <View >
                        <Estabelecimentos ></Estabelecimentos>
                    </View>
                 
                </ScrollView>

            </View>
            

      </SafeAreaView>
    );
  }
}

export default Explore


const styles = StyleSheet.create({
  teste: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  
});
