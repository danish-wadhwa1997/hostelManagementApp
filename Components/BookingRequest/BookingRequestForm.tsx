import React from 'react';
import {TextInput, Button, useTheme, Text} from 'react-native-paper';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {FIELDNAMES} from './constants';
import {FormikProps} from 'formik';
import withForm from '../Common/FormContainer';
import {useNavigation} from '@react-navigation/native';

type BookingRequestValues = {
  [FIELDNAMES.name]: string;
  [FIELDNAMES.phone]: string;
  [FIELDNAMES.message]: string;
};

type BookingRequestProps = {
  formik: FormikProps<BookingRequestValues>;
};

const BookingRequestForm = ({formik}: BookingRequestProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    // <ImageBackground source={require('../../assets/background/stacked.png')}>
    <View style={{...styles.container, backgroundColor: theme.colors.primary}}>
      <View style={styles.formContainer}>
        <Text
          variant="headlineLarge"
          style={{...styles.heading, color: theme.colors.inversePrimary}}>
          Request Room Booking
        </Text>
        {/* ========================================================= */}

        <TextInput
          mode="outlined"
          value={formik.values[FIELDNAMES.name]}
          onChangeText={formik.handleChange(FIELDNAMES.name)}
          onBlur={formik.handleBlur(FIELDNAMES.name)}
          error={
            formik.touched[FIELDNAMES.name] && formik.errors[FIELDNAMES.name]
          }
          placeholder={'Name'}
          autoFocus
        />
        <Text style={{color: theme.colors.error}}>
          {formik.touched[FIELDNAMES.name] && formik.errors[FIELDNAMES.name]
            ? formik.errors[FIELDNAMES.name]
            : ''}
        </Text>
        {/* ========================================================= */}
        <TextInput
          mode="outlined"
          value={formik.values[FIELDNAMES.phone]}
          onChangeText={formik.handleChange(FIELDNAMES.phone)}
          onBlur={formik.handleBlur(FIELDNAMES.phone)}
          error={
            formik.touched[FIELDNAMES.phone] && formik.errors[FIELDNAMES.phone]
          }
          placeholder={'Phone'}
          autoFocus
        />
        <Text style={{color: theme.colors.error}}>
          {formik.touched[FIELDNAMES.phone] && formik.errors[FIELDNAMES.phone]
            ? formik.errors[FIELDNAMES.phone]
            : ''}
        </Text>

        {/* ========================================================= */}

        <TextInput
          mode="outlined"
          value={formik.values[FIELDNAMES.message]}
          onChangeText={formik.handleChange(FIELDNAMES.message)}
          onBlur={formik.handleBlur(FIELDNAMES.message)}
          numberOfLines={4}
          error={
            formik.touched[FIELDNAMES.message] &&
            formik.errors[FIELDNAMES.message]
          }
          placeholder={'Message'}
          autoFocus
        />
        <Text style={{color: theme.colors.error}}>
          {formik.touched[FIELDNAMES.message] &&
          formik.errors[FIELDNAMES.message]
            ? formik.errors[FIELDNAMES.message]
            : ''}
        </Text>

        <Button
          onPress={formik.submitForm}
          mode="contained"
          style={{backgroundColor: theme.colors.inversePrimary}}
          labelStyle={{color: theme.colors.primary}}>
          Submit Request
        </Button>
        <Button
          onPress={handleCancel}
          labelStyle={{color: theme.colors.inversePrimary}}>
          Cancel
        </Button>
      </View>
    </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
  },
  formContainer: {
    paddingVertical: RFValue(20),
    paddingHorizontal: RFValue(10),
    display: 'flex',
    rowGap: RFValue(10),
  },
  heading: {
    textAlign: 'center',
    marginBottom: RFValue(20),
    fontWeight: '600',
  },
});

export default withForm(BookingRequestForm);
