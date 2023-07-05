import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hostel from '../Hostels/Hostel';
import RoomsContainer from '../Room/RoomsContainer';
import Room from '../Room/Room';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Hostel"
      screenOptions={({navigation}) => ({
        headerShown: false,
      })}>
      <Stack.Screen
        name="Hostel"
        component={Hostel}
        initialParams={{hostel: {}}}
      />
      <Stack.Screen
        name="Rooms"
        component={RoomsContainer}
        initialParams={{hostelId: ''}}
      />
      <Stack.Screen
        name="Room"
        component={Room}
        initialParams={{hostelId: '', roomNumber: ''}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
