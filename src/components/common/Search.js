
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import MultiSelect from 'react-native-multiple-select';

const items = [{
  id: '92iijs7yta',
  name: 'Ondo',
}, {
  id: 'a0s0a8ssbsd',
  name: 'C2G',
}, {
  id: '16hbajsabsd',
  name: 'Calabar',
}, {
  id: 'nahs75a5sg',
  name: 'Fourth Item',
}, {
  id: '667atsas',
  name: 'Fifth Item',
}];

const selectedItem = (selectedItems) => {
  // do something with selectedItems
  console.log('Selected Items: ', selectedItems);
};

class Search extends Component {

  constructor() {
    super()

  }

  render() {
    return (
      <View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Search;
