import React, { Component } from 'react';
import { AppState, AsyncStorage, Platform, Vibration } from 'react-native';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';
import Router from './Router';

const store = createStore(
  reducers, {},
  compose(
    applyMiddleware(ReduxThunk),
    autoRehydrate()
  )
);

class App extends Component {
  componentDidMount() {
    axios.defaults.baseUrl = 'http://192.168.43.16:3000'
  }

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
