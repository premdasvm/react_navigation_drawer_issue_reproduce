import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('orders')} title="Orders" />
      <Button onPress={() => navigation.navigate('pickups')} title="Pickups" />
      <Button onPress={() => navigation.navigate('deliveries')} title="Deliveries" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
