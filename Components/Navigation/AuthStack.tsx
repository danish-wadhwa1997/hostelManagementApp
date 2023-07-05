import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
const Stack = createNativeStackNavigator();

const UnAuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: props => null}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default UnAuthStack;
