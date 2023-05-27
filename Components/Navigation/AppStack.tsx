import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hostels from '../Hostels/index';
import Profile from '../Profile/Profile';
import Hostel from '../Hostels/Hostel';
import RoomsContainer from '../Room/RoomsContainer';
import Room from '../Room/Room';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Hostels">
      <Stack.Screen name="Hostels" component={Hostels} />
      <Stack.Screen
        name="Hostel"
        component={Hostel}
        initialParams={{hostelId: ''}}
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
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default AppStack;
