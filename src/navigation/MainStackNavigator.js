import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Orders from '../screens/Order/Orders';
import Pickups from '../screens/Pickup/Pickups';
import Deliveries from '../screens/Delivery/Deliveries';
import OrderDetails from '../screens/Order/OrderDetails';

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="home" component={Home} />
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="orderDetails" component={OrderDetails} />
      <Stack.Screen name="pickups" component={Pickups} />
      <Stack.Screen name="deliveries" component={Deliveries} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
