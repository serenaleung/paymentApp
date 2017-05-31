import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Header,
  Form,
  Input,
  Item,
  Button,
  Spinner,
  Text,
  Icon
} from 'native-base';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  persistLogIn
} from '../actions';
import styles from '../assets/StyleGuide.js';
import Nstyles from '../assets/ReduxGuide.js';

class Auth extends Component {
  componentWillReceiveProps( nextProps ) {
    const { token } = nextProps;
    if ( token != null && token != this.props.token ) {
      this.props.persistLogIn(token)
    }
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderButton() {
    if(this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button block style={ Nstyles.btn} onPress={ this.onButtonPress.bind(this) }>
        <Text style={ styles.btnText }> Log In </Text>
      </Button>
    )
  }

  render() {
    return(
      <Container style={ Nstyles.container }>
        <Image source={require('../assets/bg2-sm.jpg')} style={ Nstyles.background }>
          <View style= { Nstyles.logoContainer }>
            <Image source={require('../assets/logo.png')} />
          </View>
          <Form style= { Nstyles.form }>
            <Item underline style={ Nstyles.item, styles.icon, {marginBottom: 20} }>
              <Icon name='mail' style={ Nstyles.inputIcon, styles.iconMsg }/>
              <Input
                style={ Nstyles.input }
                placeholder=''
                label="Email"
                value={ this.props.email }
                onChangeText={this.onEmailChange.bind(this)}
              />
            </Item>

            <Item underline style={ Nstyles.item, styles.icon, {marginBottom: 20}}>
              <Icon name='ios-lock' style={ Nstyles.inputIcon, Nstyles.icon }/>
              <Input
                style={ Nstyles.input }
                secureTextEntry
                placeholder=""
                label="Password"
                value={ this.props.password }
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </Item>
          </Form>
          <Text style={ Nstyles.error }>
            {this.props.error}
          </Text>
          {
            this.renderButton()
          }
        </Image>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, persistLogIn
})(Auth);
