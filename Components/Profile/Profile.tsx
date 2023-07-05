import {StyleSheet, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {Text} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {AuthContext} from '../Context/AuthContext';

const Profile = () => {
  const {user} = useContext(AuthContext);
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Profile</Text>
        <View style={styles.profileContainer}>
          {/* Profile Picture */}
          <Image
            source={require('../../assets/map.jpg')}
            style={styles.profilePicture}
          />
          {/* Tenant Information */}
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{user?.fname}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{user?.femail}</Text>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>{user?.fmobile}</Text>
          </View>
        </View>
        {/* Apartment Information */}
        <View style={styles.section}>
          <Text style={styles.heading}>Apartment Information</Text>
          <Text style={styles.label}>Apartment Number:</Text>
          <Text style={styles.value}>{user?.roomnum}</Text>
          <Text style={styles.label}>Building Name:</Text>
          <Text style={styles.value}>{user?.hostel}</Text>
          <Text style={styles.label}>Lease Start Date:</Text>
          <Text style={styles.value}>{user?.doj}</Text>
          <Text style={styles.label}>Lease End Date:</Text>
          <Text style={styles.value}>{user?.rentedtill}</Text>
          <Text style={styles.label}>Monthly Rent:</Text>
          <Text style={styles.value}>{user?.rent}</Text>
        </View>
        {/* Payment Information */}
        <View style={styles.section}>
          <Text style={styles.heading}>Payment Information</Text>
          <Text style={styles.label}>Payment Method:</Text>
          <Text style={styles.value}>Credit Card</Text>
          <Text style={styles.label}>Card Number:</Text>
          <Text style={styles.value}>**** **** **** 1234</Text>
          <Text style={styles.label}>Expiry Date:</Text>
          <Text style={styles.value}>12/25</Text>
        </View>
        {/* Emergency Contact */}
        <View style={styles.section}>
          <Text style={styles.heading}>Emergency Contact</Text>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user?.father}</Text>
          <Text style={styles.label}>Relationship:</Text>
          <Text style={styles.value}>Father</Text>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user?.famobile}</Text>

          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{user?.mother}</Text>
          <Text style={styles.label}>Relationship:</Text>
          <Text style={styles.value}>Mother</Text>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{user?.mphone}</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFValue(16),
  },
  heading: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginBottom: RFValue(8),
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: RFValue(16),
  },
  profilePicture: {
    width: RFValue(100),
    height: RFValue(100),
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
    marginBottom: RFValue(8),
  },
  section: {
    marginBottom: RFValue(16),
  },
});
