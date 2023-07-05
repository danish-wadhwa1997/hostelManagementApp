/* eslint-disable react/no-unstable-nested-components */
import {View, Image, StyleSheet, Alert, Share} from 'react-native';
import React, {useContext} from 'react';
import {Surface, Text, List, useTheme, Divider} from 'react-native-paper';
import {logoutUser} from '../Services/loginService';
import {AuthContext} from '../Context/AuthContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import FadeInView from '../AnimatedView/FadeInView';
import SlideInView from '../AnimatedView/SlideInView';
const ProfileSection = ({navigation}) => {
  const {setUserAuthorized, user, setUser} = useContext(AuthContext);

  const logout = async () => {
    try {
      const userLoggedOut = await logoutUser();
      if (userLoggedOut) {
        setUserAuthorized(false);
        setUser();
      }
    } catch (error) {
      console.log(error);
      setUserAuthorized(false);
    }
  };
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: RFValue(16),
    },
    heading: {
      fontSize: RFValue(20),
      fontWeight: 'bold',
      marginBottom: RFValue(8),
    },
    profileContainer: {
      flexDirection: 'row',
      marginBottom: RFValue(16),
      padding: RFValue(16),
      justifyContent: 'flex-start',
    },
    profilePicture: {
      width: RFValue(70),
      height: RFValue(70),
      borderRadius: RFValue(50),
      marginRight: RFValue(16),
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    label: {
      fontWeight: 'bold',
      marginBottom: RFValue(4),
    },
    value: {
      // marginBottom: RFValue(8),
    },
    section: {
      marginBottom: RFValue(16),
    },
    listItem: {
      paddingLeft: RFValue(16),
      backgroundColor: theme.colors.background,
    },
  });

  const goToProfileDetails = () => {
    navigation.navigate('ProfileDetails');
  };

  const goToChangePassword = () => {
    navigation.navigate('ChangePassword');
  };

  const shareApp = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        console.log('content shared', result);

        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('share dismissed');
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  const handleComplaint = () => {
    navigation.navigate('Complaint');
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.primaryContainer,
      }}>
      <KeyboardAwareScrollView>
        <SlideInView toValue={0} duration={1000}>
          <Surface style={styles.profileContainer}>
            <FadeInView
              toValue={1}
              duration={5000}
              className={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/map.jpg')}
                style={styles.profilePicture}
              />
            </FadeInView>

            {/* Tenant Information */}
            <FadeInView
              toValue={1}
              duration={5000}
              className={styles.infoContainer}>
              <Text variant="headlineSmall" style={styles.value}>
                {user?.fname}
              </Text>
            </FadeInView>
          </Surface>
        </SlideInView>

        {/* services opted for */}
        {/* add service */}
        {/* general setting */}

        {/* like change password / logout / update info / complaints form*/}
        <SlideInView toValue={1} duration={1000}>
          <List.Section>
            <List.Subheader
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.secondary,
              }}>
              General Settings
            </List.Subheader>
            <List.Item
              onPress={handleComplaint}
              title="Support & Feedback"
              style={styles.listItem}
              left={() => (
                <List.Icon
                  color={theme.colors.primary}
                  icon="chat-processing-outline"
                />
              )}
              right={() => (
                <List.Icon icon="chevron-right" color={theme.colors.primary} />
              )}
            />
            <Divider />
            <List.Item
              title="Tell a friend"
              onPress={shareApp}
              style={styles.listItem}
              left={() => (
                <List.Icon color={theme.colors.primary} icon="share-outline" />
              )}
              right={() => (
                <List.Icon icon="chevron-right" color={theme.colors.primary} />
              )}
            />
            <Divider />

            <List.Item
              title="Account Information"
              style={styles.listItem}
              onPress={goToProfileDetails}
              left={() => (
                <List.Icon
                  color={theme.colors.primary}
                  icon="account-outline"
                />
              )}
              right={() => (
                <List.Icon icon="chevron-right" color={theme.colors.primary} />
              )}
            />
            <Divider />
            <List.Item
              title="Change Password"
              style={styles.listItem}
              onPress={goToChangePassword}
              left={() => (
                <List.Icon
                  color={theme.colors.primary}
                  icon="briefcase-edit-outline"
                />
              )}
              right={() => (
                <List.Icon icon="chevron-right" color={theme.colors.primary} />
              )}
            />
            <Divider />

            <List.Item
              title="Logout"
              onPress={logout}
              style={styles.listItem}
              left={() => (
                <List.Icon color={theme.colors.primary} icon="logout" />
              )}
              right={() => (
                <List.Icon icon="chevron-right" color={theme.colors.primary} />
              )}
            />
          </List.Section>
        </SlideInView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ProfileSection;
