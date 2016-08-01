import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  Button,
  Container,
  Content,
  Header,
  List,
  ListItem,
  Icon,
  Title,
  View
} from 'native-base';
import _ from 'lodash';

import FormInput from '../components/FormInput';
import { DatePicker, TimePicker } from '../components/DateTimePicker';
import { savePost } from '../redux/module/PostForm';

const stateDate = new Date();
const stateHour = stateDate.getHours();
const stateMinute = stateDate.getMinutes();
const keyAry = ['name', 'title', 'content'];

class Post extends Component {
  constructor(props) {
    const { dispatch } = props;
    super(props);
    this.state = {
      date: stateDate,
      hour: stateHour,
      minute: stateMinute,
      isNull: {
        name: false,
        title: false,
        content: false
      },
      formValue: {
        name: '',
        dateTime: this._getDataTime(stateDate, stateHour, stateMinute),
        title: '',
        content: ''
      }
    };
  }

  render() {
    const { date, hour, minute, isNull } = this.state;
    return (
      <Container>
        <Header foregroundColor='#FFF'>
          <Button
            transparent
            onPress={ this._actionBack.bind(this) }
          >
            <Icon name='md-arrow-back' />
          </Button>
          <Title>Post</Title>
          <Button
            transparent
            onPress={ this._actionAddPost.bind(this) }
          >
            <Icon name='md-checkmark'/>
          </Button>
        </Header>
        <Content>
          <FormInput
            icon='md-person'
            onChangeText={ this._onChangeText.bind(this) }
            placeholder='NAME'
            placeholerStyle={ isNull.name ? 'red' : '' }
          />
          <ListItem style={ {padding: 0} }>
            <View style={ styles.picker }>
              <Icon name='md-calendar' style={ styles.pickerIcon }/>
              <DatePicker
                pickerStyle={ styles.pickerStyle }
                date={ date }
                onSelect={ this._onSelectDate.bind(this) }
              />
            </View>
          </ListItem>
          <ListItem style={ {padding: 0} }>
            <View style={ styles.picker }>
              <Icon name='md-time' style={ styles.pickerIcon }/>
              <TimePicker
                pickerStyle={ styles.pickerStyle }
                hour={ hour }
                minute={ minute }
                onSelect={ this._onSelectTime.bind(this)}
              />
            </View>
          </ListItem>
          <FormInput
            icon='md-pricetag'
            onChangeText={ this._onChangeText.bind(this) }
            placeholder='TITLE'
            placeholerStyle={ isNull.title ? 'red' : '' }
          />
          <FormInput
            icon='md-pricetags'
            onChangeText={ this._onChangeText.bind(this) }
            placeholder='CONTENT'
            placeholerStyle={ isNull.content ? 'red' : '' }
          />
        </Content>
      </Container>
    );
  }
  _actionBack() {
    const { navigator } = this.props;
    navigator.push({
      id: 'Dashboard'
    });
  }

  _actionAddPost() {
    let { formValue, isNull } = this.state;
    let disabled = false;

    _.map(keyAry, item => {
      if(formValue[item] === '') {
        isNull[item] = true;
        disabled = true;
      } else {
        isNull[item] = false;
      }
    });

    if (!disabled) {
      const { dispatch } = this.props;
      dispatch(savePost(this.state.formValue));
    } else {
      this.setState({isNull: isNull});
    }
  }

  _onChangeText(text, item) {
    let { formValue, isNull } = this.state;
    let flag = false;
    let newState;
    formValue[item] = text;
    isNull[item] = false;
    newState = {
      isNull: isNull,
      formValue: formValue
    };
    this.setState(newState);
  }

  _onSelectDate = date => {
    const { formValue, hour, minute } = this.state;
    let newState = {
      date: date,
      formValue: formValue
    };
    newState.formValue.dateTime = this._getDataTime(date, hour, minute)
    this.setState(newState);
  }

  _onSelectTime = (hour, minute) => {
    const { date, formValue } = this.state;
    let newState = {
      hour: hour,
      minute: minute,
      formValue: formValue
    };
    newState.formValue.dateTime = this._getDataTime(date, hour, minute);
    this.setState(newState);
  }

  _getDataTime = (date, hour, minute) => {
    let dateTime = date.toLocaleDateString();
    dateTime += ' ' + this._formatTime(hour, minute);
    return dateTime;
  }

  _formatTime = (hour, minute) => {
    return hour + ':' + (minute < 10 ? '0' + minute : minute);
  }
}

export const mapStateToProps = state => { return { PostForm: state.PostForm } };

export default connect(mapStateToProps)(Post);


const styles = StyleSheet.create({
  picker: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  pickerIcon: {
    paddingRight: 5
  },
  pickerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  }
});
