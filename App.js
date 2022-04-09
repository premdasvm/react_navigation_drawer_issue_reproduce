import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <MainStackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
