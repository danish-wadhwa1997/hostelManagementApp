import React from 'react';
import {TextInput, Button, useTheme, Text} from 'react-native-paper';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
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
  const theme = useTheme();

  return (
    <ImageBackground source={require('../../assets/logo-bg.png')}>
      <View style={{...styles.container}}>
        <View style={styles.formContainer}>
          {/* <Text
          variant="headlineLarge"
          style={{...styles.heading, color: theme.colors.inversePrimary}}>
          Login
        </Text> */}
          {/* <Image
            source={require('../../assets/logo.png')}
            style={{
              width: RFValue(100),
              height: RFValue(100),
              alignSelf: 'center',
            }}
          /> */}
          <TextInput
            mode="outlined"
            value={formik.values[LOGIN_FIELD_NAME.email]}
            onChangeText={formik.handleChange(LOGIN_FIELD_NAME.email)}
            onBlur={formik.handleBlur(LOGIN_FIELD_NAME.email)}
            error={
              formik.touched[LOGIN_FIELD_NAME.email] &&
              formik.errors[LOGIN_FIELD_NAME.email]
            }
            // label={'Email'}
            placeholder="Email"
            autoFocus
            inputMode="email"
            // style={{backgroundColor: 'transparent'}}
            // activeUnderlineColor={theme.colors.inversePrimary}
          />
          <Text style={{color: theme.colors.error}}>
            {formik.touched[LOGIN_FIELD_NAME.email] &&
            formik.errors[LOGIN_FIELD_NAME.email]
              ? formik.errors[LOGIN_FIELD_NAME.email]
              : ''}
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
            // label={'Password'}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={true}
            // style={{backgroundColor: 'transparent'}}
            // activeUnderlineColor={theme.colors.inversePrimary}
          />
          <Text style={{color: theme.colors.error}}>
            {formik.touched[LOGIN_FIELD_NAME.password] &&
            formik.errors[LOGIN_FIELD_NAME.password]
              ? formik.errors[LOGIN_FIELD_NAME.password]
              : ''}
          </Text>
          <Button onPress={formik.submitForm} mode="contained-tonal">
            LOG IN
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
    marginTop: RFValue(200),
  },
  heading: {
    textAlign: 'center',
    marginBottom: RFValue(20),
  },
});

export default withForm(LoginForm);
