// Import a library to help create a component
import React, { Component } from 'react';
// import { Router, Scene } from 'react-native-router-flux';
import { ActivityIndicator, AsyncStorage, View, Text } from 'react-native';
import { getUsers } from './utilities/requests'
import Serena from './components/serena'
// import { PaymentForm } from './components/PaymentForm'
// import Authentication from './components/routes/Authentication';
// import 'isomorphic-fetch';
// import HomePage from './components/routes/Home';
// import { Header } from './components/common';
// import LoginForm from './components/LoginForm';

// import AlbumList from './components/AlbumList';

// Create Component
// const App = () => (
//   <View style={{ flex: 1 }}>
//     <Header headerText='Payment App' />
//     {/* <LoginForm /> */}
//   </View>
//   );

class App extends Component {
  constructor() {
    super();
    this.state = { name: '' };
    // this.state = { hasToken: false, isLoaded: false };
  }


  getTokenAndPay() {
    // debugger
    var cardDetails = {
      "card[number]": "4242424242424242",
      "card[exp_month]": "09",
      "card[exp_year]": "18",
      "card[cvc]": "123"
    };

    var formBody = [];
    for (var property in cardDetails) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(cardDetails[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");


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
    .then(response => this.processPayment(response.id))
  }

  processPayment(token) {
    fetch(`http://192.168.1.178:3000/charges`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stripeToken: token, stripeTokenType: "card", stripeEmail: "serena@gmail.com" })
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  componentDidMount() {
    // AsyncStorage.getItem('id_token').then((token) => {
    //   this.setState({ hasToken: token !== null, isLoaded: true });
    // });

    // getUsers()
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({name: data[0].first_name})
    //   })
    //   .catch(err => console.log(err))

    this.getTokenAndPay()


  }

  render() {

      return (
        <View>
          <Text>{this.state.name}</Text>
          <Serena />
        </View>
    );
  }
}


// Render on Device
export default App;
