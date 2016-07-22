import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Content, Spinner, Text, View } from 'native-base';

export default class Loading extends Component {
  render() {
    return (
      <View style={ styles.content }>
        <Spinner color='#039BE5' />
        <Text style={ styles.text }>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#039BE5'
  }
});
