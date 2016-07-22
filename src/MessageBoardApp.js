import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Dashboard from './containers/Dashboard';
import Post from './containers/Post';

export default class MessageBoardApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={ {id: 'Dashboard'} }
        renderScene={ this.renderScene.bind(this) }
      />
    )
  }

  renderScene(route, navigator) {
    const { dispatch } = this.props;
    switch (route.id) {
      case 'Dashboard':
        return (
          <Dashboard
            dispatch={ dispatch }
            navigator={ navigator }
          />
        );
      case 'Post':
        return (
          <Post navigator={navigator}/>
        );
    }
  }
}
