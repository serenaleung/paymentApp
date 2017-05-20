import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, CardSection } from './common';


class Message extends Component {

  onSearchChange(text){
    let data = this.props.contactdata
    let autocomplete = [];
    contactdata.include(text) {
      autocomplete.push(dataThatMatchesTheText)
    }

  }

  render() {
    return(

      <Input
        secureTextEntry
        placeholder="password"
        label="Password"
        value={this.state.password}
        onChangeText={ this.onSearchChange.bind(this)}
      />
    );
  }


}


export default Message;
