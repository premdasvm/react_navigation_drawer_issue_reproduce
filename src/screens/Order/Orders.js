import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Orders = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('orderDetails')} title="Order Details" />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
