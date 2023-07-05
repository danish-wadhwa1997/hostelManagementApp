import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import BottomTabs from './TabNavigation';

const MainNavigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer theme={theme}>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default MainNavigation;
