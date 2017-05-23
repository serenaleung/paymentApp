import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import Message from './components/Message';
import Icon from 'react-native-vector-icons/Ionicons';

const mainIcon = ({ selected }) => {
  return(
    <View>
      <Icon name='md-home' style={{ color: selected ? 'red' : 'white' }} />
      <Text style={{ color: selected ? 'red' : 'white' }}> Main </Text>
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
            <Scene key='main' title='Main' component={Main}></Scene>
          </Scene>

          <Scene key='MessageSet' icon={ mainIcon}>
            <Scene key='messages' title='Messages' component={Message}></Scene>
          </Scene>

        </Scene>
      </Scene>

    </Router>
  )
}

export default RouterComponent;
