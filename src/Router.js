import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import Message from './components/Message';

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

      <Scene key='afterAuth'>
        <Scene key='tabbar' tabs >

          <Scene key='mainSet'>
            <Scene key='main' title='Main' component={Main}></Scene>
            <Scene key='messages' title='Messages' component={Message}></Scene>
          </Scene>

        </Scene>
      </Scene>

    </Router>
  )
}

export default RouterComponent;
