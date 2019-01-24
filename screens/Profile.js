import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'

class Profile extends React.Component {
  render() {
    return (
      <View>
          <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
