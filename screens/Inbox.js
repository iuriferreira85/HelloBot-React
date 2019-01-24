import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'

class Inbox extends React.Component {
  render() {
    return (
      <View>
          <Text>Inbox</Text>
      </View>
    );
  }
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
