import React, {Component} from 'react';
import {StyleSheet, Text, View, LinearGradient, Button} from 'react-native';

import {createBottomTabNavigator, 
  createSwitchNavigator, 
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
        } from 'react-navigation'

import Icon from 'react-native-vector-icons/Ionicons'
import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import Favoritos from './screens/Favoritos'
import HotList_Main from './screens/HotList'
import Profile from './screens/Profile'
import Detail from './screens/Detail'

class App extends Component {
  render () {
    return (
      <AppContainer></AppContainer>
    )
    
  }
}

export default App

// class WelcomeScreen extends Component {
//   render () {
//     return (
//       <View>
//         <Text>Welcome Screen</Text>
//         <Button title='Login' onPress={() => this.props.navigation.navigate('Dashboard')}/>
//       </View>
//     )
//   }
// }

// class Dashboard extends Component {
//   render () {
//     return (
//       <View>
//         <Text>Dashboard Screen</Text>
//         <Button title='Login' onPress={() => this.props.navigation.navigate('Welcome')}/>
//       </View>
//     )
//   }
// }







const BottomTabNavigator = createBottomTabNavigator (
  // {
  //   WelcomeScreen,
  //   Dashboard
  // },
  {
  Explore: {
    screen:Explore,
    navigationOptions:{
      tabBarLabel: 'EXPLORE',
      tabBarIcon:  ({tintColor}) => (
        <Icon name='md-search' color={tintColor} size={24}></Icon>
      )
    }
  },
  Saved: {
    screen:Favoritos, 
    navigationOptions:{
      tabBarLabel: 'FAVORITOS',
      tabBarIcon:  ({tintColor}) => (
        <Icon name='md-heart' color={tintColor} size={24}></Icon>
      )
    }

  },
  Trips: {
    screen:HotList_Main,
    navigationOptions:{
      tabBarLabel: 'HOTLIST',
      tabBarIcon:  ({tintColor}) => (
        <Icon name='md-flame' color={tintColor} size={24}></Icon>
      )
    }

  },
  Inbox: {
    screen:Inbox,
    navigationOptions:{
      tabBarLabel: 'INBOX',
      tabBarIcon:  ({tintColor}) => (
        <Icon name='md-chatboxes' color={tintColor} size={24}></Icon>
      )
    }

  },

  // Profile: {
  //   screen: Profile,
  //   navigationOptions: {
  //     tabBarLabel: 'PERFIL',
  //     tabBarIcon:  ({ tintColor }) => (
  //       <Icon name='md-person' color=
  //       {tintColor} size={24}/>
  //     )
  //   }
  // }

  },{
    tabBarOptions: {
      activeTintColor: '#26d6e2',
      inactiveTintColor: '#afaeae',
      style: {
        backgroundColor:'#f2f2f2',
        borderTopWidth:0.2,
        borderColor:'#e2e2e2',
        shadowOffset: {width:5, height:3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        paddingBottom:10,
        paddingTop:5,
        height: 70,
        fontFamily: 'EvilIcons',
      }
    }
  }
)



const BottomStackNavigator = createStackNavigator ({
  BottomTabNavigator: BottomTabNavigator,
  Detail: Detail,


},

{
  defaultNavigationOptions:({navigation})=> {
    
    return{
      headerStyle: {
        backgroundColor:'#26d6e2',
        shadowColor: 'null',
        shadowOpacity: 0,
        elevation: 0,
        

      },

      headerLeft: (
        <Icon name='md-menu' color='white' size={30} style={{paddingLeft: 15}} onPress={()=> navigation.openDrawer()}/>

      ),
      headerTitle: (
        <Text style={{color:'white', fontSize:20, fontWeight:'700', textAlign:'center'}}>HelloBot</Text>
      ),
      headerTitleStyle: {
        textAlign: 'center',alignSelf:'center'
      },
      headerRight: (<View></View>)
      
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Explore: {screen: BottomStackNavigator},
  

})

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppSwitchNavigator)
