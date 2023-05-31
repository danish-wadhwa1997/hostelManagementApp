import {View} from 'react-native';
import React, {useContext} from 'react';
import {Button} from 'react-native-paper';
import {logoutUser} from '../Services/loginService';
import {AuthContext} from '../Context/AuthContext';

const ProfileSection = () => {
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
      {/* avatar and name
      <View>
        <View>
          <Image />
        </View>
        <Text>user name</Text>
      </View> */}
      {/* services opted for */}
      {/* add service */}
      {/* general setting */}
      {/* like change password / logout / update info / complaints form*/}
      <Button onPress={logout}>Logout</Button>
    </View>
  );
};

export default ProfileSection;
