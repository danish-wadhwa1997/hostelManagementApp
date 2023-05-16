import React from 'react';
import withForm from '../Common/FormContainer';
import {StyleSheet, View} from 'react-native';
import {TextInput, Text, Button, useTheme} from 'react-native-paper';
import {SIGNUP_FIELD_NAME} from './Constants';
import {RFValue} from 'react-native-responsive-fontsize';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

const SignUpForm = ({formik}) => {
  const theme = useTheme();
  const errorText = {color: theme.colors.error};
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollView}>
        <Text variant="headlineMedium" style={styles.heading}>
          Sign Up Form
        </Text>
        {/* email */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.email]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.email)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.email)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.email] &&
            formik.errors[SIGNUP_FIELD_NAME.email]
          }
          label={'Email'}
          autoFocus
          inputMode="email"
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.email] &&
          formik.errors[SIGNUP_FIELD_NAME.email]
            ? formik.errors[SIGNUP_FIELD_NAME.email]
            : ''}
        </Text>

        {/* password */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.password]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.password)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.password)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.password] &&
            formik.errors[SIGNUP_FIELD_NAME.password]
          }
          label={'Password'}
          textContentType="password"
          secureTextEntry={true}
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.password] &&
          formik.errors[SIGNUP_FIELD_NAME.password]
            ? formik.errors[SIGNUP_FIELD_NAME.password]
            : ''}
        </Text>

        {/* confirm password */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.confirmPassword]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.confirmPassword)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.confirmPassword)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.confirmPassword] &&
            formik.errors[SIGNUP_FIELD_NAME.confirmPassword]
          }
          label={'Confirm Password'}
          textContentType="password"
          secureTextEntry={true}
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.confirmPassword] &&
          formik.errors[SIGNUP_FIELD_NAME.confirmPassword]
            ? formik.errors[SIGNUP_FIELD_NAME.confirmPassword]
            : ''}
        </Text>

        {/* first name */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.firstName]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.firstName)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.firstName)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.firstName] &&
            formik.errors[SIGNUP_FIELD_NAME.firstName]
          }
          label={'First Name'}
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.firstName] &&
          formik.errors[SIGNUP_FIELD_NAME.firstName]
            ? formik.errors[SIGNUP_FIELD_NAME.firstName]
            : ''}
        </Text>

        {/* last name */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.lastName]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.lastName)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.lastName)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.lastName] &&
            formik.errors[SIGNUP_FIELD_NAME.lastName]
          }
          label={'Last Name'}
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.lastName] &&
          formik.errors[SIGNUP_FIELD_NAME.lastName]
            ? formik.errors[SIGNUP_FIELD_NAME.lastName]
            : ''}
        </Text>

        {/* contact number */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.contactNumber]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.contactNumber)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.contactNumber)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.contactNumber] &&
            formik.errors[SIGNUP_FIELD_NAME.contactNumber]
          }
          label={'Contact Number'}
          textContentType="telephoneNumber"
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.contactNumber] &&
          formik.errors[SIGNUP_FIELD_NAME.contactNumber]
            ? formik.errors[SIGNUP_FIELD_NAME.contactNumber]
            : ''}
        </Text>

        {/* address */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.address]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.address)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.address)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.address] &&
            formik.errors[SIGNUP_FIELD_NAME.address]
          }
          label={'Address'}
          multiline
          numberOfLines={3}
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.address] &&
          formik.errors[SIGNUP_FIELD_NAME.address]
            ? formik.errors[SIGNUP_FIELD_NAME.address]
            : ''}
        </Text>

        {/* aadhar id */}
        <TextInput
          mode="outlined"
          value={formik.values[SIGNUP_FIELD_NAME.aadharId]}
          onChangeText={formik.handleChange(SIGNUP_FIELD_NAME.aadharId)}
          onBlur={formik.handleBlur(SIGNUP_FIELD_NAME.aadharId)}
          error={
            formik.touched[SIGNUP_FIELD_NAME.aadharId] &&
            formik.errors[SIGNUP_FIELD_NAME.aadharId]
          }
          label={'Aadhar Id'}
        />
        <Text style={errorText}>
          {formik.touched[SIGNUP_FIELD_NAME.aadharId] &&
          formik.errors[SIGNUP_FIELD_NAME.aadharId]
            ? formik.errors[SIGNUP_FIELD_NAME.aadharId]
            : ''}
        </Text>

        <Button onPress={formik.submitForm}>Sign Up</Button>
        <Button onPress={handleLogin}>Login</Button>
        {/* </ScrollView> */}
      </KeyboardAwareScrollView>
    </View>
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
  },
  scrollView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(20),
    rowGap: RFValue(10),
  },
  heading: {
    textAlign: 'center',
    marginBottom: RFValue(20),
  },
});

export default withForm(SignUpForm);
