import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hostels from '../Hostels/index';
import Profile from '../Profile/Profile';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Hostels">
      <Stack.Screen name="Hostels" component={Hostels} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppStack;
