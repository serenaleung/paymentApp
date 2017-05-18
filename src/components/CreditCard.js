import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

const s = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});


class CreditCard extends Component {
  _onChange = formData => {
    console.log(JSON.stringify(formData, null, " "));
  };

  _onFocus = field => {
    console.log(field);
  };

  render() {
    return (
      <View>
        <Text>Toot Toot</Text>
        <View style={s.container}>
          <CreditCardInput
            autoFocus
            requiresCVC
            labelStyle={s.label}
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        </View>
        <Text>Poot Poot</Text>
      </View>
    );
  }
}

export default CreditCard;
