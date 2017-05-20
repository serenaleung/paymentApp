// Import a library to help create a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
// import { Router, Scene } from 'react-native-router-flux';
// import { ActivityIndicator, AsyncStorage, View, Text } from 'react-native';
// import { getUsers } from './utilities/requests';
import Serena from './components/serena';
import CreditCard from './components/CreditCard';
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
  constructor(props) {
    super();
    this.state = { loggedIn: false, apiToken: null };
    // this.getTokenAndPay = this.getTokenAndPay.bind(this)
    // this.state = { hasToken: false, isLoaded: false };
  }


  logInUser() {
      fetch('http://192.168.1.178:3000/api/v1/sessions', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 's@e.com',
          password: '123'
        })
      })
      .then((response) => {
          return response.json()
      })
      .then((response) => {
          console.log(response)
          this.setState({
          loggedIn: true,
          apiToken: response.apiToken
          })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  logOut() {
    this.setState({
      loggedIn: false,
      apiToken: null
    })
  }

  renderContent() {
     switch (this.state.loggedIn) {
       case true:
         return (
           <CardSection>
             <Button onPress={this.logOut.bind(this)}>
               Log Out
             </Button>
           </CardSection>
         );
       case false:
         return <LoginForm logInUser={this.logInUser.bind(this)}/>;
       default:
         return <Spinner size="large" />;
     }
   }

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
        <View>
          {/* <Text>{this.state.name}</Text> */}
          <Header headerText="Authentication" />
            {this.renderContent()}
          {/* <Serena /> */}
          <CreditCard />
        </View>
    );
  }
}


// Render on Device
export default App;
