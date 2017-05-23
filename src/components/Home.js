import React, { Component } from 'react';
import { TouchableHightLight, Text, View } from 'react-native';
import AtoZListView from 'react-native-atoz-listview';
import Search from 'react-native-search-box';

const rowHeight = 40;

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {
  //       'A': [
  //         {
  //           'name': 'Anh Tuan Nguyen',
  //           'age': 28
  //         },
  //         {
  //           'name': 'An Nhien',
  //           'age': 20
  //         },
  //       ],
  //       'Z': [
  //         {
  //           'name': 'Zue Dang',
  //           'age': 22
  //         },
  //         {
  //           'name': 'Zoom Jane',
  //           'age': 30
  //         },
  //       ]
  //     }
  //   }
  // }

    renderRow = (item, sectionId, index) => {
      return (
        <TouchableHightLight
          style={{
            height: rowHeight,
            justifyContent: 'center',
            alignItems: 'center' }}
        >
          <Text>{item.name}</Text>
        </TouchableHightLight>
      );
    }

    // Important: You must return a Promise
    beforeFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus');
            resolve();
        });
    }

    // Important: You must return a Promise
    onFocus = (text) => {
        return new Promise((resolve, reject) => {
            console.log('beforeFocus', text);
            resolve();
        });
    }

    // Important: You must return a Promise
    afterFocus = () => {
        return new Promise((resolve, reject) => {
            console.log('afterFocus');
            resolve();
        });
    }

  render() {
    // inside your render function
    return (
      <View style={{ flex: 1 }}>
        <Search
          ref='search_box'
          /**
          * There many props that can customizable
          * Please scroll down to Props section
          */
        />
      </View>
    );
  }
}

export default Home;
