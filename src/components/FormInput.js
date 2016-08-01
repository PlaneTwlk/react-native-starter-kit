import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Input, InputGroup, List, ListItem , View} from 'native-base';

import { DatePicker, TimePicker } from './DateTimePicker';

export default class FormInput extends Component {
  render() {
    const { icon, onChangeText, placeholder, placeholerStyle } = this.props;
    let refName = placeholder.toLowerCase();
    return (
      <ListItem>
        <InputGroup>
          <Icon name={ icon } />
          <Input
            placeholder={ placeholder }
            onChangeText={ text => { onChangeText (text, refName); } }
            placeholderTextColor={ placeholerStyle }
          />
        </InputGroup>
      </ListItem>
    );
  }

  static propTypes = {
    icon: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    placeholerStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  };
}
