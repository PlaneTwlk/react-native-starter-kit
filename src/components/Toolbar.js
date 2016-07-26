import React, { Component, PropTypes } from 'react';
import { Button, Header, Icon, Title } from 'native-base';

const Toolbar = (props) => {
  const { onActionPress } = props;
  return (
    <Header foregroundColor='#FFF'>
      <Title>Dashboard</Title>
      <Button transparent iconRigh onPress={ onActionPress }>
        <Icon name="md-create" />
      </Button>
    </Header>
  );
};

Toolbar.props = {
  onActionPress: PropTypes.func
}

export default Toolbar;
