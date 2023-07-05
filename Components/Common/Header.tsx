import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {Button, IconButton, Text, useTheme} from 'react-native-paper';
import {RFValue} from 'react-native-responsive-fontsize';
import {AuthContext} from '../Context/AuthContext';

const Header = ({navigation}) => {
  // const user = 'Danish Wadhwa';
  const {userAuthorized, user} = useContext(AuthContext);
  const theme = useTheme();
  console.log(user);
  const gotoLogin = () => {
    navigation.navigate('Auth', {screen: 'Login'});
  };

  const gotoProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primaryContainer,
        paddingVertical: userAuthorized ? 0 : RFValue(8),
      }}>
      <View style={{marginLeft: RFValue(8)}}>
        {userAuthorized ? (
          <Text
            variant="bodyLarge"
            style={{
              color: theme.colors.primary,
            }}>{`Hi, ${user?.fname}`}</Text>
        ) : (
          <Text
            style={{
              color: theme.colors.primary,
            }}
            variant="bodyLarge">
            Greetings!
          </Text>
        )}
      </View>
      <View>
        {userAuthorized ? (
          <IconButton
            icon="account-outline"
            iconColor={theme.colors.primary}
            size={RFValue(24)}
            onPress={gotoProfile}
          />
        ) : (
          <Button
            onPress={gotoLogin}
            labelStyle={{
              color: theme.colors.primary,
            }}>
            Log In
          </Button>
        )}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(8),
    alignItems: 'center',
    elevation: 3,
  },
});
