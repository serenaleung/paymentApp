import React, { Component } from 'react';
import { View, Image } from 'react-native';
import {
  Container,
  Content,
  Header,
  Form,
  Left,
  Input,
  Footer,
  FooterTab,
  Item,
  Button,
  Spinner,
  Text,
  InputGroup,
  Icon,
  Textarea
} from 'native-base';
  import { Card, CardSection } from './common';
  import { Actions } from 'react-native-router-flux';
  import styles from '../assets/StyleGuide.js';

  class LoginForm extends Component {
    logInUser() {
      fetch('http://192.168.1.178:3000/api/v1/sessions', {
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
        this.setState({
          loggedIn: true,
          apiToken: response.success
        });
        Actions.AfterAuth(response.success)
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
        <Button transparent style={ styles.btn } onPress={this.logInUser.bind(this)}>
          <Text style={ styles.btnText }>Login</Text>
        </Button>
      );
    }

    render() {
      return (
        <Container>
          <Image source={require('../assets/bg2-sm.jpg')}>
          <View style= { styles.logoContainer }>
            <Image source={require('../assets/logo.png')}/>
            <Content>
              <Form style= { styles.form }>
                <Item style={ styles.item }>
                  <Icon active name='mail' style={ styles.iconMsg } />
                  <Input
                    style={ styles.input }
                    placeholder=""
                    label="Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                  />
                </Item>
                <Item style={ styles.item }>
                  <Icon active name='ios-lock' style={ styles.icon }/>
                  <Input
                    style={ styles.input }
                    secureTextEntry
                    placeholder=""
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
                <Text style={styles.errorTextStyle}>
                  {this.state.error}
                </Text>
                <Container>
                  {this.renderButton()}
                </Container>
              </Form>
            </Content>
          </View>
        </Image>
      </Container>
    );
  }
}

export default LoginForm;
