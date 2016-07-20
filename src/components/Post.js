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
      {title: 'post', iconName: 'md-checkmark', show: 'always'}
    ];

    return (
      <View>
        <Ionicons.ToolbarAndroid
          style={styles.toolbar}
          title='Post'
          titleColor='#FFF'
          navIconName='md-close'
          onIconClicked={this.onIconClicked.bind(this)}
          actions={toolbarActions}
          // onActionSelected={this.onActionSelected.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    color: '#FFF',
    fontSize: 16,
  }
});
