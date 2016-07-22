import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View } from 'react-native'
import { Button, Container, Content, Header, Icon, Spinner, Title } from 'native-base';

import PostList from '../components/PostList';
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
            (rows.length) ? <PostList rows={ rows } /> : <Spinner color='#039BE5'/>
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
