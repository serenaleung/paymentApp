import React, { Component } from 'react';
import { AppRegistry, StyleSheet, FlatList, ListView, ListItem, Picker, ToastAndroid, AsyncStorage } from 'react-native';
import { Container, Header, Text, Button, Form, Input, Item, Card, Icon, View } from 'native-base';
import axios from 'axios';
import Search from './common/Search';
import SGstyles from '../assets/StyleGuide';
import MultiSelect from 'react-native-multiple-select';

const DOMAIN = 'http://192.168.1.178:3000';
// const DOMAIN = 'http://192.168.43.16:3000';
// const DOMAIN = 'http://192.168.1.75:3000';
const API_TOKEN = '3H0xoOVzMVHjsh27C7e8PwQSrA_PaAFCgBn-rYKfjHM';

const items = [{
  api_token: "something",
  name: "Jason",
  id: 2
},
{
  api_token: "something_else",
  name: "derek",
  id: 1
}];



class Message extends Component {
  constructor(props) {
    super(props);
    console.log('this is the props', props);
    this.state = {
      details: '',
      amount: '',
      user_ids: '',
      userList: [
        {"id":2,"name":"Jason","api_token":"z9dvi_1nevKuCahsMt23Iaps7AwtUC40KqivpjUb4LA"},
        {"id":3,"name":"Chelsea","api_token":"vBUuueIDH3pOqe8DA9B0YWa1EFkXY2VBsxK8l3PPi4U"}
      ],
      token: null,
      ower: null,
      flash_message: ''
    };

    this.fetchUsers = this.fetchUsers.bind(this);
    this.renderList = this.renderList.bind(this);
    this.selectedItem = this.selectedItem.bind(this);
  }

  componentDidMount() {
    console.log('mount');
    this.fetchUsers();

  }

  async stuffx() {
    try {
    console.log(await AsyncStorage.getItem('show'));
    }
    catch (d) {
      console.log('w');
    }
  }

  fetchUsers() {
    // axios.get('http://192.168.1.75:3000/api/v1/users', {
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

  async stuff() {
    const sb = JSON.parse(await AsyncStorage.getItem('states'));
    console.log(sb);
    await AsyncStorage.setItem('show', '2');
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
            user_ids: [2,3]
          }
        })
      }
    )
    .then((response) => {
      return response.json()
    })
    .then(response => {
      console.log('sucessfull post', response)
      debugger
      if(response.hasOwnProperty('success')) {
        this.setState({ flash_message: response.flash_message })
      }
      ToastAndroid.show(response.flash_message, ToastAndroid.LONG);
      console.log('HHEHEHEHEEHHE', this.state)
      this.stuff();
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

  selectedItem(selectedItems) {
    // do something with selectedItems
    console.log('Selected Items: ', selectedItems);
  };

  render() {
        this.stuffx();
    console.log('RENDER');
    console.log("userlist", this.state.userList);
    console.log("items", items)
    console.log("props", this.props)
    return (
      <Container>
        <Header>
        </Header>
          <Text>{ this.state.flash_message }</Text>

          <Form style={ SGstyles.fullWidth, {marginLeft: 20, marginRight: 20 }} >
            <Item underline >
              <Input style={{ marginTop: 20 }}
                placeholder="Description"
                label="Title"
                value={this.state.details}
                onChangeText={details => this.setState({ details })}
                // onChangeText = {this.props.updateDetails}
                // onChangeText={ this.onSearchChange.bind(this)}
              />
            </Item>
            <Item underline >
              <Input style={{ marginTop: 20 }}
                placeholder="$"
                label="Amount"
                value={this.state.amount}
                onChangeText={amount => this.setState({ amount })}
                // onChangeText = {this.props.updateAmount}
                // onChangeText={ this.onSearchChange.bind(this)}
              />
            </Item>
          </Form>

         {/* <View>
           <MultiSelect
             items={this.state.userList}
             uniqueKey="id"
             selectedItemsChange={this.selectedItem}
             selectedItems={[]}
             selectText="Pick Items"
             searchInputPlaceholderText="Search Items..."
             altFontFamily="ProximaNova-Light"
             tagRemoveIconColor="#CCC"
             tagBorderColor="#CCC"
             tagTextColor="#CCC"
             selectedItemTextColor="#CCC"
             selectedItemIconColor="#CCC"
             itemTextColor="#000"
             searchInputStyle={{ color: '#CCC' }}
           />
         </View> */}

        <Button style={{marginLeft: 20, marginTop: 70}} onPress={this.postMessageRequest.bind(this)}>
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
