// Import a library to help create a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Grid, Content, InputGroup, Input, Icon } from 'native-base';
// import { getUsers } from './utilities/requests';

import Router from './Router';



class App extends Component {

  // componentWillMount(){
  //   console.log( 'WILL MOUNT APP ')
  //   console.log( this.props )
  //   console.log(this);
  // }

  //   this.getTokenAndPay = this.getTokenAndPay.bind(this)
  //   this.state = { hasToken: false, isLoaded: false };
  // }

  // componentDidMount() {
    // AsyncStorage.getItem('id_token').then((token) => {
    //   this.setState({ hasToken: token !== null, isLoaded: true });
    // });

    // getUsers()
    //   .then((data) => {
    //     console.log(data);
    //     this.setState({name: data[0].first_name})
    //   })
    //   .catch(err => console.log(err))
    // this.getTokenAndPay()
  // }

render() {

    return (
      <Router />
    );
  }
}


// Render on Device
export default App;
