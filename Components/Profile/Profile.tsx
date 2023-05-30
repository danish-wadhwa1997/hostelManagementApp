import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {Button} from 'react-native-paper';
import {logoutUser} from '../Services/loginService';
import {AuthContext} from '../Context/AuthContext';

const Profile = () => {
  const {setUserAuthorized} = useContext(AuthContext);
  const logout = async () => {
    try {
      const userLoggedOut = await logoutUser();
      if (userLoggedOut) {
        setUserAuthorized(false);
      }
    } catch (error) {
      console.log(error);
      setUserAuthorized(false);
    }
  };

  return (
    <View>
      <Button onPress={logout}>Logout</Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
