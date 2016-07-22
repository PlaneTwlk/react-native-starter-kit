import React, { Component } from 'react';
import { Content, List, ListItem, Text } from 'native-base';
import _ from 'lodash';

export default class PostList extends Component {
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
