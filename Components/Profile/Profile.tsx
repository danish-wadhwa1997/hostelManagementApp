import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';

const Profile = () => {
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
            <Text style={styles.value}>John Doe</Text>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>johndoe@email.com</Text>
            <Text style={styles.label}>Phone:</Text>
            <Text style={styles.value}>+1 555-123-4567</Text>
          </View>
        </View>
        {/* Apartment Information */}
        <View style={styles.section}>
          <Text style={styles.heading}>Apartment Information</Text>
          <Text style={styles.label}>Apartment Number:</Text>
          <Text style={styles.value}>123</Text>
          <Text style={styles.label}>Building Name:</Text>
          <Text style={styles.value}>Oakwood Apartments</Text>
          <Text style={styles.label}>Lease Start Date:</Text>
          <Text style={styles.value}>January 1, 2023</Text>
          <Text style={styles.label}>Lease End Date:</Text>
          <Text style={styles.value}>December 31, 2023</Text>
          <Text style={styles.label}>Monthly Rent:</Text>
          <Text style={styles.value}>$1,500</Text>
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
          <Text style={styles.value}>Jane Doe</Text>
          <Text style={styles.label}>Relationship:</Text>
          <Text style={styles.value}>Spouse</Text>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>+1 555-987-6543</Text>
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
