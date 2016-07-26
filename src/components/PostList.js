import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem, View, Text } from 'native-base';
import _ from 'lodash';

const PostList = (props) => {
  const { rows, refreshControl } = props;
  return (
    <List>
      {
        _.map(rows, (item, key)=> {
          return(
            <ListItem key={ key } style={ styles.listItem }>
              <View>
                <View style={ styles.authorBar }>
                  <Text style={ styles.author }>{ item.name }</Text>
                  <Text style={ styles.dateTime }>{ item.dateTime }</Text>
                </View>
                <View style={ styles.messageWrap}>
                  <Text style={ styles.title }>{ item.title }</Text>
                  <Text style={ styles.content }>{ item.content }</Text>
                </View>
              </View>
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

const styles = StyleSheet.create({
  listItem: {
    flexDirection: null,
    marginLeft: null,
    padding: null,
    paddingLeft: null
  },
  authorBar: {
    backgroundColor: '#E0E0E0',
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5
  },
  author:{
    lineHeight: null,
  },
  dateTime: {
    color: 'gray',
    fontSize: 12,
    lineHeight: null,
  },
  messageWrap: {
    paddingLeft: 20,
    paddingRight: 20
  },
  title: {
    marginTop: 5,
    marginBottom: 5
  },
  content: {
    color: '#5B5B5B',
    fontSize: 13,
    marginBottom: 5
  }
});
