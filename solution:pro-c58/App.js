import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { createAppContaianer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

// You can import local files
import HomeScreen from './screens/HomeScreen';

export default App extends default React.Component {
  render () {
    return (
      <View>
      <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen : HomeScreen
})

const AppContainer = createAppContaianer(AppNavigator);
