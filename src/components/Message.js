import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Text, Picker, Button, Form, Input, Item } from 'native-base';
import axios from 'axios';
// import { postMessageRequest } from '../utilities/requests';

// const DOMAIN = 'http://192.168.1.178:3000';
// const DOMAIN = 'http://192.168.43.16:3000';
const DOMAIN = 'http://192.168.1.75:3000';
// const DOMAIN = 'http://192.168.1.166:3000';
const API_TOKEN = '3H0xoOVzMVHjsh27C7e8PwQSrA_PaAFCgBn-rYKfjHM';

class Message extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      detail: '',
      amount: '',
      user_ids: '',
      userList: null,
      token: this.props.data
    };
  }

  componentWillMount(){
    console.log('GOING INTO MESSAGE.JS');
    axios.get('http://10.228.246.228:3000/api/v1/users', {
      headers: { 'auth': this.state.token }
    })
      .then((response) => {
        console.log('GET USERS API RESPONSE')
        console.log(response);
      })
      .catch( (e) => {
        console.log(e)
      })
  }
  // onSearchChange(text){
  //   let data = this.props.contactdata
  //   let autocomplete = [];
  //   contactdata.include(text) {
  //     autocomplete.push(dataThatMatchesTheText)
  //   }
  //
  // }

  // updateDetails = (text) => {
  //   this.setState({details: text})
  // }
  //
  // updateAmount = (integer) => {
  //   this.setState({amount: integer})
  // }

  postMessageRequest() {
    return fetch(
      `${DOMAIN}/api/v1/messages?api_token=${API_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // title: this.updateDetails,
          // amount: this.updateAmount
          details: this.state.details,
          amount: this.state.amount
          // message: messageParams
        })
      }
    )
    .then((response) => {
        return response.json()
    })
    .catch((error) => {
      console.log(error);
    });
  }

  getUsers() {
    return fetch(`${DOMAIN}/api/v1/users?api_token=${API_TOKEN}`)
      .then(res => (console.info(res), res))
      .then(function (res) { return res.json() })
      .catch(console.error)
  }

  render() {
    return (
      <Container>
        <Header>
          
        </Header>
        <Form>
          <Item>
            <Input
              placeholder="CodeCore party"
              label="Title"
              value={this.state.details}
              onChangeText={details => this.setState({ details })}
              // onChangeText = {this.props.updateDetails}
              // onChangeText={ this.onSearchChange.bind(this)}
            />
          </Item>
          <Item>
            <Input
              placeholder="$"
              label="Amount"
              value={this.state.amount}
              onChangeText={amount => this.setState({ amount })}
              // onChangeText = {this.props.updateAmount}
              // onChangeText={ this.onSearchChange.bind(this)}
            />
          </Item>
          <Item>
            <Picker
              selectedValue={this.state.user_ids}
              onValueChange={(user_ids) => this.setState({user_ids: user_ids})}>
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </Item>
        </Form>
        <Button onPress={this.postMessageRequest.bind(this)}>
          <Text>Send Request</Text>
        </Button>
      </Container>
      );
  }

}

export default Message;
