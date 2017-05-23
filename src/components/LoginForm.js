
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Header, Form, Left, Input, Footer, FooterTab, Item, Button, Spinner, Text } from 'native-base';
import { Card, CardSection } from './common';
import styles from '../assets/StyleGuide.js'

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  constructor(props) {
    super(props)

  }

  onButtonPress() {

    this.props.logInUser();

  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        <Text style={ styles.btnText }>Login</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
        <View >
          <Image source={require('../assets/bg-sm.jpg')}>
          <Image source={require('../assets/logo.png')}/>
        
              <CardSection>
                <Input
                  placeholder="user@gmail.com"
                  label="Email"
                  value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
              </CardSection>

              <CardSection>
                <Input
                  secureTextEntry
                  placeholder="password"
                  label="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                />
              </CardSection>

              <Text style={styles.errorTextStyle}>
                {this.state.error}
              </Text>

              <CardSection>
                {this.renderButton()}
              </CardSection>

          </Image>
        </View>
      </Container>
    );
  }
}



export default LoginForm;
