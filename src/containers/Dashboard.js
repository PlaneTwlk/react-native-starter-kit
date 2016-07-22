import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native'
import { Button, Container, Content, Header, Icon, Title } from 'native-base';

import PostList from '../components/PostList';
import Loading from '../components/Loading';
import { fetchPost } from '../redux/module/PostList';

class Dashboard extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchPost());
  }
  render() {
    let rows = this.props.PostList;
    return (
      <Container>
        <Header foregroundColor='#FFF'>
          <Title>Dashboard</Title>
          <Button transparent iconRigh onPress={this._actionCreatePost.bind(this)}>
            <Icon name="md-create" />
          </Button>
        </Header>
        <Content>
          {
            (rows.length) ? <PostList rows={ rows } /> : <Loading />
          }
        </Content>
      </Container>
    );
  }
  _actionCreatePost() {
    const { navigator } = this.props;
    navigator.push({
      id: 'Post'
    });
  }

  static propTypes = {
    PostList: PropTypes.array.isRequired
  }
}

export const mapStateToProps = state => { return { PostList: state.PostList } };

export default connect(mapStateToProps)(Dashboard);
