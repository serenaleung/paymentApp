import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { Container, Header, Text, Button, Form, Input, Item, Card, Icon, View } from 'native-base';
import styles from '../assets/ReduxGuide.js';
import SGstyles from '../assets/StyleGuide';

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
  constructor() {
    super();

    this.state = {
      disabled: false
    }

    this.getTokenAndPay = this.getTokenAndPay.bind(this)
    this.processPayment = this.processPayment.bind(this)
  }

  _onChange = formData => {
    console.log(JSON.stringify(formData, null, " "));
  };

  _onFocus = field => {
    console.log(field);
  };

  getTokenAndPay() {
    this.setState({ disabled: true })

    const cardDetails = {
      'card[number]': '4242424242424242',
      'card[exp_month]': '09',
      'card[exp_year]': '18',
      'card[cvc]': '123'
    };

    var formBody = [];
    for (var property in cardDetails) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(cardDetails[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    console.log('token fetch');
    fetch('https://api.stripe.com/v1/tokens', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + 'pk_test_94tpmL4fmjoOyB3lhh1HpezT'
      },
      body: formBody
    })
    .then(response => response.json())
    .then(response => {
      this.processPayment(response.id)
    });
  }

  processPayment(token) {
    fetch(`http://192.168.1.178:3000/charges`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stripeToken: token, stripeTokenType: "card", stripeEmail: "serena@gmail.com", amount: '500' })
    })
    .then(response => {
      response.json();
    })
    .then(response => console.log(response))
    .catch((error) => {
      console.log('There has been a problem with your fetch operation: ' + error.message);
    });
  }

  render() {
    return (
      <View>
        <Header style={SGstyles.cardMarginTop}>
          <Text style={SGstyles.text}>Payment</Text>
        </Header>
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

        <Button block style={styles.btnCard} onPress={this.getTokenAndPay} disabled={this.state.disabled}>
          <Text>Send Payment</Text>
        </Button>
      </View>
    );
  }
}

export default CreditCard;
