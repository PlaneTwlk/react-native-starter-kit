import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Input, InputGroup, List, ListItem , View} from 'native-base';

import { DatePicker, TimePicker } from './DateTimePicker';

const FormInput = (props) => {
  const { onChangeText, icon, placeholder } = props;
  return (
    <ListItem>
      <InputGroup>
        <Icon name={ icon } />
        <Input
          placeholder={ placeholder }
          onChangeText={ (text) => { changeText(text, 'name')} }
        />
      </InputGroup>
    </ListItem>
  );
}

FormInput.props = {
  onChangeText: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default FormInput;
