import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Dimensions, ScrollView, RefreshControl, View } from 'react-native';
import { Button, Header, Icon, Title } from 'native-base';

import Toolbar from '../components/Toolbar';
import PostList from '../components/PostList';
import { fetchPost } from '../redux/module/PostList';

const { height } = Dimensions.get('window');
const toolbarHeight = 56;
const contentHeight = height - 56;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(fetchPost());
  }

  render() {
    const rows = this.props.PostList.data;
    const { isRefreshing } =  this.props.PostList;
    return (
      <View>
        <View style={ { height: toolbarHeight } }>
          <Toolbar onActionPress={ this._actionCreatePost.bind(this) }/>
        </View>
        <ScrollView
          style={ {height: contentHeight} }
          refreshControl={
            <RefreshControl
              refreshing={ isRefreshing }
              onRefresh={ this._onRefresh.bind(this) }
            />
          }
        >
          <PostList rows={ rows } />
        </ScrollView>
      </View>
    );
  }

  _actionCreatePost() {
    const { navigator } = this.props;
    navigator.push({
      id: 'Post'
    });
  }

  _onRefresh() {
    const { dispatch } = this.props;
    dispatch(fetchPost());
  }

  static propTypes = {
    PostList: PropTypes.object.isRequired
  }
}

export const mapStateToProps = state => { return { PostList: state.PostList } };

export default connect(mapStateToProps)(Dashboard);
