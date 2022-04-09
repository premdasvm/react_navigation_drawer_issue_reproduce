import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator, { DeliveryStackNavigator, OrderStackNavigator, PickupStackNavigator } from './MainStackNavigator';
import Home from '../screens/Home/Home';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="Main" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
