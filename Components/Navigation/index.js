import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UnAuthStack from './UnAuthStack';
import {useTheme} from 'react-native-paper';

const MainNavigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <UnAuthStack />
    </NavigationContainer>
  );
};

export default MainNavigation;
