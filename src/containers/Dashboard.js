import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { fetchPost } from '../redux/module/PostList';

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(fetchPost());
  }
  render() {
    return (
      <View style={styles.container}>
        <Ionicons.ToolbarAndroid
          style={ styles.title }
          title='Dashboard'
          titleColor='#FFF'
          actions={ [{title: 'add', iconName: 'md-create', show: 'always'}] }
          onActionSelected={ this._onActionSelected.bind(this) }
        />
      </View>
    );
  }
  _onActionSelected(position) {
    const { navigator } = this.props;
    if (position === 0) {
      navigator.push({
        id: 'Post'
      });
    }
  }

  static propTypes = {
    PostList: PropTypes.array.isRequired
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    backgroundColor: '#FF6600',
    height: 56
  }
});

export const mapStateToProps = state => { return { PostList: state.PostList } };

export default connect(mapStateToProps)(Dashboard);
