import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {useTheme} from 'react-native-paper';
import {AuthContext} from '../Context/AuthContext';
import AppStack from './AppStack';

const MainNavigation = () => {
  const theme = useTheme();
  const {userAuthorized} = useContext(AuthContext);
  return (
    <NavigationContainer theme={theme}>
      {userAuthorized ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;
