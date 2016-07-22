import React, { Component } from 'react';
import { StyleSheet, ToolbarAndroid, Text, View } from 'react-native';;
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Post extends Component {
  onIconClicked() {
    const { navigator } = this.props;
    navigator.pop();
  }

  onActionSelected(position) {
    const { navigator } = this.props;
    if (position === 0) {
      navigator.push({
        id: 'Post'
      });
    }
  }

  render() {
    const toolbarActions = [
      {title: 'post', iconName: 'md-add', show: 'always'}
    ];

    return (
      <View style={ styles.container }>
        <Ionicons.ToolbarAndroid
          style={ styles.toolbar }
          title='Post'
          titleColor='#FFF'
          navIconName='md-arrow-round-back'
          onIconClicked={this.onIconClicked.bind(this)}
          actions={toolbarActions}
          // onActionSelected={this.onActionSelected.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
