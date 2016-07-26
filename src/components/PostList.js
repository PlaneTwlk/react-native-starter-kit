import React, { Component, PropTypes } from 'react';
import { refreshControl } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import _ from 'lodash';

const PostList = (props) => {
  const { rows, refreshControl } = props;
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
};

PostList.props = {
  rows: PropTypes.object.isRequired
};

export default PostList;
