// Import a library to help create a component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { Header, Button, CardSection, Spinner } from './components/common';
// import { getUsers } from './utilities/requests';
import LoginForm from './components/LoginForm';
import CreditCard from './components/CreditCard';
import Message from './components/Message';
// import Home from './components/Home';


// import HomePage from './components/routes/Home';
// import { Header } from './components/common';

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
      // fetch('http://192.168.1.178:3000/api/v1/sessions', {
      // fetch('http://192.168.1.75:3000/api/v1/sessions', {
      fetch('http://192.168.1.166:3000/api/v1/sessions', {
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
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }


  logOut() {
    this.setState({
      loggedIn: false,
      apiToken: null
    });
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

  // return <Router>
  //   <Scene key="root">
  //     <Scene key="login" component={LoginForm} title="Login"/>
  //     <Scene key="creditcard" component={CreditCard} title="CreditCard"/>
  //     <Scene key="message" component={Message} title="Message"/>
  //   </Scene>
  // </Router>

      return (
        <View>
          {/* <Text>{this.state.name}</Text> */}
          {/* <Home /> */}
          <Header headerText="Authentication" />
            {this.renderContent()}
          <Message />
          {/* <Serena /> */}
          {/* <CreditCard /> */}

        </View>
    );
  }
}


// Render on Device
export default App;
