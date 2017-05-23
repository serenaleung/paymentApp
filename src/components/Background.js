// import React, { Component } from 'react';
// import { AppRegistry, View, Text, StyleSheet, Image } from 'react-native';
//
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // remove width and height to override fixed static size
//     width: null,
//     height: null,
//   }
// });
//
// class Background extends React.Component {
//   render() {
//     return (
//       <View>
//         <Image source={{uri:'http://i68.tinypic.com/2qm3n6e.jpg'}} style={styles.container}>
//         </Image>
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent(
//   'Background',
//   () => Background
// );
//
// // export default Background;


import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

class Background extends Component {
  render() {
    return (
      <Image source={require('../assets/bg-sm.jpg')}/>
    );
  }
}

// App registration and rendering
AppRegistry.registerComponent('Background', () => Background);

export default Background;
