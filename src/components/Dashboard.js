import React, { Component } from 'react';
import { ToolbarAndroid, StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Dashboard extends Component {
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
      {title: 'add', iconName: 'md-add', show: 'always'}
    ];

    return (
      <View>
        <Ionicons.ToolbarAndroid
          style={styles.toolbar}
          title='Dashboard'
          titleColor='#FFF'
          actions={toolbarActions}
          onActionSelected={this.onActionSelected.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#FF6600'
  }
});
