// Import a library to help create a component
import React, { Component } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Container, Grid, Content, InputGroup, Input, Icon } from 'native-base';
import Router from './Router';
import CreditCard from './components/CreditCard';

class App extends Component {

  // componentWillMount(){
  //   console.log( 'WILL MOUNT APP ')
  //   console.log( this.props )
  //   console.log(this);
  // }

  //   this.getTokenAndPay = this.getTokenAndPay.bind(this)
  //   this.state = { hasToken: false, isLoaded: false };
  // }

  componentDidMount() {
  // AsyncStorage.getItem('id_token').then((token) => {
  //   this.setState({ hasToken: token !== null, isLoaded: true });
  // });
  // axios.defaults.baseUrl = 'http://10.228.246.228:3000';
  }

  render() {
    return (
      <Router />
    );
  }
}


// Render on Device
export default App;
