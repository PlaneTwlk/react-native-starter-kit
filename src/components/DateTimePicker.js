import React, { Component, PropTypes } from 'react';
import {
  DatePickerAndroid,
  StyleSheet,
  TimePickerAndroid,
  TouchableOpacity
} from 'react-native';

import { Content, Icon, Text } from 'native-base';

const date = new Date();

export class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: date
    };
  }

  async _showDatePicker(options) {
    try {
      const { onSelect } = this.props;
      let newState = {};
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        newState.date = new Date(year, month, day);
      }
      this.setState(newState);
      onSelect(newState.date);
    } catch ({code, message}) {
      console.warn('Error : ', message);
    }
  }

  render() {
    const { date } = this.state;
    const { pickerStyle } = this.props;
    return (
      <TouchableOpacity
        onPress={this._showDatePicker.bind(this, { date: this.state.date })}
        style={ pickerStyle }
      >
        <Text>
          { date.toLocaleDateString() }
        </Text>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }
}


export class TimePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: date.getHours(),
      minute: date.getMinutes()
    };
  }

  _formatTime(hour, minute) {
    return hour + ':' + (minute < 10 ? '0' + minute : minute);
  }

  async _showTimePicker(options) {
    try {
      const { onSelect } = this.props;
      let newState = {};
      const { action, minute, hour } = await TimePickerAndroid.open(options);
      if (action !== TimePickerAndroid.dismissedAction) {
        newState = {
          hour: hour,
          minute: minute
        };
      }
      this.setState(newState);
      onSelect(hour, minute);
    } catch ({code, message}) {
      console.warn('Error : ', message);
    }
  }

  render() {
    const { hour, minute } = this.state;
    const { pickerStyle } = this.props;
    return (
      <TouchableOpacity
        onPress={this._showTimePicker.bind(this, { hour: hour, minute: minute  })}
        style={ pickerStyle }
      >
        <Text>
          { this._formatTime(hour, minute) }
        </Text>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired
  }
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 5,
    paddingRight: 5
  }
});
