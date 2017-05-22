import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, CardSection, Input } from './common';
// import { postMessageRequest } from '../utilities/requests';

// const DOMAIN = 'http://192.168.1.178:3000';
// const DOMAIN = 'http://192.168.43.16:3000';
// const DOMAIN = 'http://192.168.1.75:3000';
const DOMAIN = 'http://192.168.1.166:3000';
const API_TOKEN = '3H0xoOVzMVHjsh27C7e8PwQSrA_PaAFCgBn-rYKfjHM';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: '',
      amount: '',
    };
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

  render() {
    return (
      <View>
        <CardSection>
          <Input
            placeholder="CodeCore party"
            label="Title"
            value={this.state.details}
            onChangeText={details => this.setState({ details })}
            // onChangeText = {this.props.updateDetails}
            // onChangeText={ this.onSearchChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="$"
            label="Amount"
            value={this.state.amount}
            onChangeText={amount => this.setState({ amount })}
            // onChangeText = {this.props.updateAmount}
            // onChangeText={ this.onSearchChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.postMessageRequest.bind(this)}>
            Send Request
          </Button>
        </CardSection>
      </View>
      );
  }

}

export default Message;
