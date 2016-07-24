import React, { Component, PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
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

import FormInput from '../components/FormInput';
import { DatePicker, TimePicker } from '../components/DateTimePicker';

const date = new Date();

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledPost: true,
      formValue: {
        name: '',
        date: date,
        hour: date.getHours(),
        minute: date.getMinutes(),
        title: '',
        content: ''
      }
    };
  }

  render() {
    const { disabledPost } = this.state;
    const { date, hour, minute } = this.state.formValue;
    console.log(this.state);
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
            onPress={ (!disabledPost) ? this._actionAddPost.bind(this) : null }>
            <Icon name='md-checkmark'/>
          </Button>
        </Header>
        <Content>
          <FormInput
            icon='md-person'
            placeholder='NAME'
            onChangeText={ this._onChangeText.bind(this) }
          />
          <ListItem style={ {padding: 0} }>
            <View style={ styles.picker }>
              <Icon name='md-calendar' style={ styles.pickerIcon }/>
              <DatePicker
                pickerStyle={ pickerStyle }
                date={ date }
                onSelect={ this._onSelectDate.bind(this) }
              />
            </View>
          </ListItem>
          <ListItem style={ {padding: 0} }>
            <View style={ styles.picker }>
              <Icon name='md-time' style={ styles.pickerIcon }/>
              <TimePicker
                pickerStyle={ pickerStyle }
                hour={ hour }
                minute={ minute }
                onSelect={ this._onSelectTime.bind(this)}
              />
            </View>
          </ListItem>
          <FormInput
            icon='md-pricetag'
            placeholder='TITLE'
            onChangeText={ this._onChangeText.bind(this) }
          />
          <FormInput
            icon='md-pricetags'
            placeholder='CONTENT'
            onChangeText={ this._onChangeText.bind(this) }
          />
        </Content>
      </Container>
    );
  }

  _actionBack() {
    const { navigator } = this.props;
    navigator.pop();
  }

  _actionAddPost() {
    const { dispatch } = this.props;
  }

  _onChangeText(text, item) {
    let { formValue } = this.state;
    let newState = {};

    formValue[item] = text;
    if ( formValue.name === '' || formValue.title === '' || formValue.content === '' ) {
      newState.disabledPost = true;
    } else {
      newState.disabledPost = false;
    }
    newState.formValue = formValue;

    this.setState(newState);
  }

  _onSelectDate = date => {
    let { formValue } = this.state;
    let newState;

    formValue.date = date;
    newState = {
      disabledPost: this.state.disabledPost,
      formValue: formValue
    }
    this.setState(newState) ;
  }

  _onSelectTime = (hour, minute) => {
    let { formValue } = this.state;
    let newState;

    formValue.hour = hour;
    formValue.minute = minute;
    newState = {
      disabledPost: this.state.disabledPost,
      formValue: formValue
    }
    this.setState(newState);
  }

  static propTypes = {
    PostForm: PropTypes.object.isRequired
  }
}

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
  }
});

const pickerStyle ={
  height: 40,
  justifyContent: 'center',
  paddingLeft: 5,
  paddingRight: 5
};

export const mapStateToProps = state => { return { PostForm: state.PostForm } };

export default connect(mapStateToProps)(Post);
