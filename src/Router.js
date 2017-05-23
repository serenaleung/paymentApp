import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import Message from './components/Message';
import Icon from 'react-native-vector-icons/Ionicons';
import CreditCard from './components/CreditCard';

const mainIcon = ({ selected }) => {
  return(
    <View>
      <Icon name='md-home' style={{ fontSize: 22, color: selected ? '#2E2E83' : 'grey', marginLeft: 11 }} />
      <Text style={{ marginBottom: 10, fontSize: 14, color: selected ? '#2E2E83' : 'grey' }}> Main </Text>
    </View>
  );
}


const messageIcon = ({ selected }) => {
  return(
    <View>
      <Icon name='md-mail' style={{ fontSize: 23, color: selected ? '#2E2E83' : 'grey', marginLeft: 50 }} />
      <Text style={{ marginBottom: 10, fontSize: 14, color: selected ? '#2E2E83' : 'grey' }}> Create a Message </Text>
    </View>
  );
}

const RouterComponent = () => {
  console.log('GOT INSIDE ROUTER')
  return(
    <Router>

      <Scene intial={true} key='root'>
          <Scene
            key='auth'
            hideNavBar={true}
            component={LoginForm}
          />
      </Scene>

      <Scene key='AfterAuth'>
        <Scene key='tabbar' tabs >

          <Scene key='MainSet' icon={ mainIcon }>
            <Scene key='main' hideNavBar={true} component={Main}></Scene>
          </Scene>

          <Scene key='MessageSet' icon={ messageIcon }>
            <Scene key='messages' hideNavBar={true} component={Message}></Scene>
          </Scene>

          <Scene key='creditSet'>
            <Scene key='payment' hideNavBar={true} component={CreditCard}></Scene>
          </Scene>

        </Scene>
      </Scene>

    </Router>
  )
}

export default RouterComponent;
