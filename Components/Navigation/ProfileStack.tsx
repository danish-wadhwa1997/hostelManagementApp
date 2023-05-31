import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../Profile/Profile';
import ProfileSection from '../Profile/ProfileSection';
const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileSection"
      screenOptions={{header: () => null}}>
      <Stack.Screen name="ProfileSection" component={ProfileSection} />
      <Stack.Screen name="ProfileDetails" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
