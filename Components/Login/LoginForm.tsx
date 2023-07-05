import React from 'react';
import {TextInput, Button, useTheme, Text} from 'react-native-paper';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {LOGIN_FIELD_NAME} from './Constants';
import {FormikProps} from 'formik';
import withForm from '../Common/FormContainer';
import {useNavigation} from '@react-navigation/native';

type LoginFormValues = {
  [LOGIN_FIELD_NAME.email]: string;
  [LOGIN_FIELD_NAME.password]: string;
};

type LoginProps = {
  formik: FormikProps<LoginFormValues>;
};

const LoginForm = ({formik}: LoginProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground source={require('../../assets/background/stacked.png')}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text
            variant="headlineLarge"
            style={{...styles.heading, color: theme.colors.inversePrimary}}>
            Login
          </Text>

          <TextInput
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
          <Text style={{color: theme.colors.error}}>
            {formik.touched[LOGIN_FIELD_NAME.email] &&
            formik.errors[LOGIN_FIELD_NAME.email]
              ? formik.errors[LOGIN_FIELD_NAME.email]
              : ''}
          </Text>
          <TextInput
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
          <Text style={{color: theme.colors.error}}>
            {formik.touched[LOGIN_FIELD_NAME.password] &&
            formik.errors[LOGIN_FIELD_NAME.password]
              ? formik.errors[LOGIN_FIELD_NAME.password]
              : ''}
          </Text>
          <Button onPress={formik.submitForm} mode="contained-tonal">
            log in
          </Button>
          <Button
            onPress={handleSignUp}
            labelStyle={{color: theme.colors.inversePrimary}}>
            Sign Up
          </Button>
        </View>
      </View>
    </ImageBackground>
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
  },
});

export default withForm(LoginForm);
