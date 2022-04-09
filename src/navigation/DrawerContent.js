import React from 'react';
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItem } from '@react-navigation/drawer';
import { Text, View } from 'react-native';

const DrawerContent = props => {
  const { navigation } = props;

  const goTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text>Menu</Text>
      <View>
        <DrawerItem
          label="Home"
          onPress={() => {
            goTo('home');
          }}
        />
        <DrawerItem
          label="Orders"
          onPress={() => {
            goTo('orders');
          }}
        />
        <DrawerItem
          label="Pickups"
          onPress={() => {
            goTo('pickups');
          }}
        />
        <DrawerItem
          label="Deliveries"
          onPress={() => {
            goTo('deliveries');
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
