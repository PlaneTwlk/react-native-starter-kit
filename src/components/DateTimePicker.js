import React, { Component, PropTypes } from 'react';
import {
  DatePickerAndroid,
  StyleSheet,
  TimePickerAndroid,
  TouchableOpacity
} from 'react-native';

import { Content, Icon, Text } from 'native-base';

export class DatePicker extends Component {
  constructor(props) {
    super(props);
  }

  async _showDatePicker(options) {
    try {
      const { onSelect } = this.props;
      const { action, year, month, day } = await DatePickerAndroid.open(options);
      let date;
      if (action !== DatePickerAndroid.dismissedAction) {
        date = new Date(year, month, day);
        onSelect(date);
      }
    } catch ({code, message}) {
      console.warn('Error : ', message);
    }
  }

  render() {
    const { date, pickerStyle } = this.props;
    return (
      <TouchableOpacity
        onPress={this._showDatePicker.bind(this, { date: date })}
        style={ pickerStyle }
      >
        <Text>
          { date.toLocaleDateString() }
        </Text>
      </TouchableOpacity>
    );
  }

  static propTypes = {
    onSelect: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired
  }
}


export class TimePicker extends Component {
  constructor(props) {
    super(props);
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
        onSelect(hour, minute);
      }
    } catch ({code, message}) {
      console.warn('Error : ', message);
    }
  }

  render() {
    const { hour, minute, pickerStyle } = this.props;
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
    onSelect: PropTypes.func.isRequired,
    hour: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    minute: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  }
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 5,
    paddingRight: 5
  }
});
