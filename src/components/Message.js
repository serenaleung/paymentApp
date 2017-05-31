import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, ListView, ListItem, Picker, ToastAndroid, AsyncStorage } from 'react-native';
import { Container, Header, Text, Button, Form, Input, Item, Card, Icon, View } from 'native-base';
import axios from 'axios';
import Search from './common/Search';
import SGstyles from '../assets/StyleGuide';
const DOMAIN = 'http://192.168.1.178:3000';
const API_TOKEN = '3H0xoOVzMVHjsh27C7e8PwQSrA_PaAFCgBn-rYKfjHM';

class Message extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      details: '',
      amount: '',
      user_ids: '',
      contact: '',
      userList: [],
      token: null,
      ower: null,
      flash_message: ''
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.renderList = this.renderList.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    axios.get(`${DOMAIN}/api/v1/users`, {
      headers: { 'auth': this.props.data }
    })
    .then((response) => {
      console.log('GET USERS API RESPONSE');
      console.log(response.data);
      this.setState({
        token: this.props.data,
        userList: response.data
      });
    })
    .catch( (e) => {
      console.log(e)
    })
  }

  postMessageRequest() {
    return fetch(
      `${DOMAIN}/api/v1/messages?api_token=${API_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: {
            details: this.state.details,
            amount: this.state.amount,
            user_ids: this.state.user_ids
          }
        })
      }
    )
    .then((response) => {
      return response.json()
    })
    .then(response => {
      console.log('sucessfull post', response)
      // debugger
      if(response.hasOwnProperty('success')) {
        this.setState({ flash_message: response.flash_message })
      }
      ToastAndroid.show(response.flash_message, ToastAndroid.LONG);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  renderList() {
    console.log('Serenas List');
    return this.state.userList.map((user)=>{
      return(
        <Text>{user.name}</Text>
      );
    })
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
          <Text style={SGstyles.text}>Create a Message</Text>
        </Header>

          <Form style={ SGstyles.fullWidth, {marginLeft: 20, marginRight: 20 }} >
            <Item underline >
              <Input style={{ marginTop: 20 }}
                placeholder="Description"
                label="Title"
                value={this.state.details}
                onChangeText={details => this.setState({ details })}
              />
            </Item>
            <Item underline >
              <Input style={{ marginTop: 20 }}
                placeholder="$"
                label="Amount"
                value={this.state.amount}
                onChangeText={amount => this.setState({ amount })}
              />
            </Item>
            <Item underline >
              <Input style={{ marginTop: 20 }}
                placeholder="John Doe"
                label="Contacts"
              />
            </Item>
          </Form>

        <Button style={{marginLeft: 35, marginTop: 70}} onPress={this.postMessageRequest.bind(this)}>
          <Text>Send Request</Text>
        </Button>
      </Container>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Message;
