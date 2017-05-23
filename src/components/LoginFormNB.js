import React, { Component } from 'react';
import { Container, Content, Form, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux'

class LoginFormNB extends Component {

  componentWillMount(){
    console.log('LOGINFORMNB LOADING');
  }

  onLoginButtonPress({email, password}){
    askldfjaskldfjsaf

    askjdfhasldkfjas

    .then(
      sadfjask;ldfjas
      Actions.afterauth();
    )
  }

  render() {
    return (
      <Container>
          <Form style={{ marginTop: 50}}>
            <Item last>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
      </Container>
      );
    }
}

export default LoginFormNB;
