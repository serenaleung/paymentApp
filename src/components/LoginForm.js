
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Header, Form, Left, Input, Footer, FooterTab, Item, Button, Spinner, Text } from 'native-base';
import { Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import styles from '../assets/StyleGuide.js';

class LoginForm extends Component {

  constructor(props) {
    super();
    this.state = { loggedIn: false, apiToken: null, email: '', password: '', error: '', loading: false };
  }

  componentWillMount() {
    console.log('WILL MOUNT LOGIN FORM')
  }

  logInUser() {
      // fetch('http://192.168.1.178:3000/api/v1/sessions', {
      // fetch('http://192.168.1.75:3000/api/v1/sessions', {
      fetch('http://10.228.51.203:3000/api/v1/sessions', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then((response) => {
          return response.json()
      })
      .then((response) => {
          console.log(response)
          this.setState({
          loggedIn: true,
          apiToken: response.api_token
          });
          Actions.mainSet(response.api_token)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logOut() {
    this.setState({
      loggedIn: false,
      apiToken: null
    });
  }

  renderContent() {
     switch (this.state.loggedIn) {
       case true:
         return (
          <CardSection>
            <Button block onPress={this.logOut.bind(this)}>
              Log Out
            </Button>
          </CardSection>
         );
       case false:
         return <LoginForm logInUser={this.logInUser.bind(this)}/>;
       default:
         return <Spinner size="large" />;
     }
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
      <Button onPress={this.logInUser.bind(this)}>
        <Text style={ styles.btnText }>Login</Text>
      </Button>
    );
  }

  render() {
    return (
          <Container style={ styles.container }>
            <View style={ styles.logoContainer }>

              <Image source={require('../assets/bg2-sm.jpg')}>
              <Image source={require('../assets/logo.png')}/>

              <Form style= { styles.form }>
                <Item regular style={ styles.item }>
                  <CardSection>
                    <Input
                      placeholder="user@gmail.com"
                      label="Email"
                      value={this.state.email}
                      onChangeText={email => this.setState({ email })}
                    />
                  </CardSection>
                </Item>
                <Item regular style={ styles.item }>
                  <CardSection>
                    <Input
                      secureTextEntry
                      placeholder="password"
                      label="Password"
                      value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                    />
                  </CardSection>
                </Item>
                  <Text style={styles.errorTextStyle}>
                    {this.state.error}
                  </Text>

                  <CardSection>
                    {this.renderButton()}
                  </CardSection>
              </Form>
          </Image>
        </View>
      </Container>
    );
  }
}

export default LoginForm;
