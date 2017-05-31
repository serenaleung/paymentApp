import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import LoginForm from './components/LoginForm';
import Auth from './components/Auth';
import Main from './components/Main';
import NewMain from './components/NewMain';
import Message from './components/Message';
import Icon from 'react-native-vector-icons/Ionicons';
import CreditCard from './components/CreditCard';
import styles from './assets/StyleGuide';

const mainIcon = ({ selected }) => {
  return(
    <View style={{ alignItems: 'center', paddingBottom: 10 }}>
      <Icon name='md-home' style={{ fontSize: 22, color: selected ? '#2E2E83' : 'grey'}} />
      <Text style={{ fontSize: 14, color: selected ? '#2E2E83' : 'grey' }}> Main </Text>
    </View>
  );
}

const messageIcon = ({ selected }) => {
  return(
    <View style={{ alignItems: 'center', paddingBottom: 10 }}>
      <Icon name='md-mail' style={{ fontSize: 23, color: selected ? '#2E2E83' : 'grey'}} />
      <Text style={{ fontSize: 14, color: selected ? '#2E2E83' : 'grey' }}> Create a Message </Text>
    </View>
  );
}

const creditIcon = ({ selected }) => {
  return(
    <View style={{ alignItems: 'center', paddingBottom: 10 }}>
      <Icon name='md-mail' style={{ fontSize: 23, color: selected ? '#2E2E83' : 'grey'}} />
      <Text style={{ fontSize: 14, color: selected ? '#2E2E83' : 'grey' }}> Pay Bill </Text>
    </View>
  )
}

const RouterComponent = () => {
  return(
    <Router>
      <Scene intial={true} key='root'>
          <Scene
            key='auth'
            hideNavBar={true}
            component={Auth}
          />
      </Scene>
      <Scene key='AfterAuth'>
        <Scene key='tabbar' tabs >
          <Scene key='MainSet' icon={ mainIcon }>
            <Scene
              key='main'
              component={Main}
              title='Home'
              navigationBarStyle={ styles.navbar }
              titleStyle={ styles.title }
              ></Scene>
          </Scene>
          <Scene key='MessageSet' icon={ messageIcon }>
            <Scene
              key='messages'
              hideNavBar={true}
              component={Message}></Scene>
          </Scene>
          <Scene key='creditSet' icon={ creditIcon }>
            <Scene key='payment' hideNavBar={true} component={CreditCard}></Scene>
          </Scene>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
