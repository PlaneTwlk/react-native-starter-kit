import React, { Component } from 'react';
import { Navigator, Text, StyleSheet } from 'react-native';

import Dashboard from './components/Dashboard'
import Post from './components/Post'

export default class App extends Component {
  render() {
    return(
      <Navigator
        tintColor='#FF6600'
        initialRoute={{id: 'Dashboard'}}
        renderScene={this.navigatorRenderScene}
      />
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'Dashboard':
        return (
          <Dashboard navigator={navigator} />
        );
      case 'Post':
        return (
          <Post navigator={navigator} />
        );
    }
  }
}


const styles = StyleSheet.create({
  toolbar : {
    backgroundColor: '#FFF',
    height: 56
  }
});
