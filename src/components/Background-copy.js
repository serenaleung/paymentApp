import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import { Container, Content } from 'native-base';
// import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

class Background extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', height: 1000}}>

        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}> */}
        {/* <View style={{backgroundColor: 'transparent', flex: 1}} /> */}

        {/* </LinearGradient> */}
      </View>


    );
  }
}

export default Background;
