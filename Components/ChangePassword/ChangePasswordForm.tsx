import React from 'react';
import {TextInput, Button, useTheme, Text} from 'react-native-paper';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CHANGE_PASSWORD_FIELDNAMES} from './Constants';
import {FormikProps} from 'formik';
import withForm from '../Common/FormContainer';

type Values = {
  [CHANGE_PASSWORD_FIELDNAMES.newPassword]: string;
  [CHANGE_PASSWORD_FIELDNAMES.oldPassword]: string;
  [CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword]: string;
};

type Props = {
  formik: FormikProps<Values>;
};

const ChangePasswordForm = ({formik}: Props) => {
  const theme = useTheme();

  return (
    <ImageBackground source={require('../../assets/background/stacked.png')}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text
            variant="headlineLarge"
            style={{...styles.heading, color: theme.colors.inversePrimary}}>
            Change Password
          </Text>

          <TextInput
            mode="outlined"
            value={formik.values[CHANGE_PASSWORD_FIELDNAMES.oldPassword]}
            onChangeText={formik.handleChange(
              CHANGE_PASSWORD_FIELDNAMES.oldPassword,
            )}
            onBlur={formik.handleBlur(CHANGE_PASSWORD_FIELDNAMES.oldPassword)}
            error={
              formik.touched[CHANGE_PASSWORD_FIELDNAMES.oldPassword] &&
              formik.errors[CHANGE_PASSWORD_FIELDNAMES.oldPassword]
            }
            label={'Old Password'}
            textContentType="password"
            secureTextEntry={true}
          />
          <Text style={{color: theme.colors.error}}>
            {formik.touched[CHANGE_PASSWORD_FIELDNAMES.oldPassword] &&
            formik.errors[CHANGE_PASSWORD_FIELDNAMES.oldPassword]
              ? formik.errors[CHANGE_PASSWORD_FIELDNAMES.oldPassword]
              : ''}
          </Text>

          <TextInput
            mode="outlined"
            value={formik.values[CHANGE_PASSWORD_FIELDNAMES.newPassword]}
            onChangeText={formik.handleChange(
              CHANGE_PASSWORD_FIELDNAMES.newPassword,
            )}
            onBlur={formik.handleBlur(CHANGE_PASSWORD_FIELDNAMES.newPassword)}
            error={
              formik.touched[CHANGE_PASSWORD_FIELDNAMES.newPassword] &&
              formik.errors[CHANGE_PASSWORD_FIELDNAMES.newPassword]
            }
            label={'New Password'}
            textContentType="password"
            secureTextEntry={true}
          />
          <Text style={{color: theme.colors.error}}>
            {formik.touched[CHANGE_PASSWORD_FIELDNAMES.newPassword] &&
            formik.errors[CHANGE_PASSWORD_FIELDNAMES.newPassword]
              ? formik.errors[CHANGE_PASSWORD_FIELDNAMES.newPassword]
              : ''}
          </Text>

          <TextInput
            mode="outlined"
            value={formik.values[CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword]}
            onChangeText={formik.handleChange(
              CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword,
            )}
            onBlur={formik.handleBlur(
              CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword,
            )}
            error={
              formik.touched[CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword] &&
              formik.errors[CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword]
            }
            label={'Confirm Password'}
            textContentType="password"
            secureTextEntry={true}
          />
          <Text style={{color: theme.colors.error}}>
            {formik.touched[CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword] &&
            formik.errors[CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword]
              ? formik.errors[CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword]
              : ''}
          </Text>
          <Button mode="contained" onPress={formik.submitForm}>
            Update
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

export default withForm(ChangePasswordForm);
