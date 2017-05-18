import React, { Component } from 'react';
import { Alert, AsyncStorage, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class Authentication extends Component {

  constructor() {
    super();
    this.state = { username: null, password: null };
  }

  userSignup() {
    if (!this.state.username || !this.state.password) return;
    // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
    fetch('http://192.168.XXX.XXX:3001/users', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.saveItem('id_token', responseData.id_token),
      Alert.alert('Signup Success!', 'Click the button to get a Chuck Norris quote!'),
      Actions.HomePage();
    })
    .done();
  }

  userLogin() {
  if (!this.state.username || !this.state.password) return;
  // TODO: localhost doesn't work because the app is running inside an emulator. Get the IP address with ifconfig.
  fetch('http://192.168.XXX.XXX:3001/sessions/create', {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password,
    })
  })
  .then((response) => response.json())
  .then((responseData) => {
    this.saveItem('id_token', responseData.id_token),
    Alert.alert('Login Success!', 'Click the button to get a Chuck Norris quote!'),
    Actions.HomePage();
  })
  .done();
}

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text stlye={styles.title}> Welcome </Text>

        <View style={styles.form}>
          <TextInput
            editable
            onChangeText={(username) => this.setState({ username })}
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={styles.inputText}
            value={this.state.username}
          />

          <TextInput
            editable
            onChangeText={(password) => this.setState({ password })}
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry
            style={styles.inputText}
            value={this.state.password}
          />

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogin.bind(this)}>
            <Text style={styles.buttonText}> Log In </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userSignup.bind(this)}>
            <Text style={styles.buttonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Authentication;
