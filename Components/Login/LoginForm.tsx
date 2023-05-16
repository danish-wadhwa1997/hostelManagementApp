import React from 'react';
import {TextInput, Button} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {LOGIN_FIELD_NAME} from './Constants';
import {FormikProps} from 'formik';
import withForm from '../Common/FormContainer';

type LoginFormValues = {
  [LOGIN_FIELD_NAME.email]: string;
  [LOGIN_FIELD_NAME.password]: string;
};

type LoginProps = {
  formik: FormikProps<LoginFormValues>;
};

const LoginForm = ({formik}: LoginProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          mode="outlined"
          value={formik.values[LOGIN_FIELD_NAME.email]}
          onChangeText={formik.handleChange(LOGIN_FIELD_NAME.email)}
          onBlur={formik.handleBlur(LOGIN_FIELD_NAME.email)}
          error={
            formik.touched[LOGIN_FIELD_NAME.email] &&
            formik.errors[LOGIN_FIELD_NAME.email]
          }
          label={'Email'}
          autoFocus
          inputMode="email"
        />
        <Text>
          {formik.touched[LOGIN_FIELD_NAME.email] &&
          formik.errors[LOGIN_FIELD_NAME.email]
            ? formik.errors[LOGIN_FIELD_NAME.email]
            : 'please enter your registered email'}
        </Text>
        <TextInput
          mode="outlined"
          value={formik.values[LOGIN_FIELD_NAME.password]}
          onChangeText={formik.handleChange(LOGIN_FIELD_NAME.password)}
          onBlur={formik.handleBlur(LOGIN_FIELD_NAME.password)}
          error={
            formik.touched[LOGIN_FIELD_NAME.password] &&
            formik.errors[LOGIN_FIELD_NAME.password]
          }
          label={'Password'}
          textContentType="password"
          secureTextEntry={true}
        />
        <Text>
          {formik.touched[LOGIN_FIELD_NAME.password] &&
          formik.errors[LOGIN_FIELD_NAME.password]
            ? formik.errors[LOGIN_FIELD_NAME.password]
            : 'please enter your password'}
        </Text>
        <Button onPress={formik.submitForm}>log in</Button>
      </View>
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
    display: 'flex',
    rowGap: RFValue(10),
  },
});

export default withForm(LoginForm);
