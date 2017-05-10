// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create Component
const App = () => (
      <Text>Some Text</Text>
  );

// Render on Device
AppRegistry.registerComponent('paymentApp', () => App);
