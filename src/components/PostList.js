import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';
import _ from 'lodash';

// import { fetchPost } from '../redux/module/PostList';

export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: false };
  }
  _onRefresh() {
    //const { dispatch } = this.props;
    //this.setState({refreshing: true});

  }

  render() {
    const { rows } = this.props;
    return (
      <List>
        {
          _.map(rows, item=> {
            return(
              <ListItem key={item.id}>
                <Text>{item.title}</Text>
              </ListItem>
            );
          })
        }
      </List>
    );
  }
}
