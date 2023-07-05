import React, {useContext} from 'react';
import * as Yup from 'yup';
import ChangePasswordForm from './ChangePasswordForm';
import {CHANGE_PASSWORD_FIELDNAMES} from './Constants';
import {changePassword} from '../Services/signUpServices';
import {AuthContext} from '../Context/AuthContext';

const initialValue = {
  [CHANGE_PASSWORD_FIELDNAMES.oldPassword]: '',
  [CHANGE_PASSWORD_FIELDNAMES.newPassword]: '',
  [CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword]: '',
};
const passwordRegex =
  /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;

const validationSchema = Yup.object({
  [CHANGE_PASSWORD_FIELDNAMES.oldPassword]: Yup.string().required('Required'),
  [CHANGE_PASSWORD_FIELDNAMES.newPassword]: Yup.string()
    .matches(passwordRegex, {
      message:
        ' Password must contain 8 characters, which consists of 1 upper case , 1 lower case english alphabet, 1 number & 1 special character',
    })
    .required('Required'),
  [CHANGE_PASSWORD_FIELDNAMES.confirmNewPassword]: Yup.string().oneOf(
    [Yup.ref(CHANGE_PASSWORD_FIELDNAMES.newPassword), null],
    'Passwords must match',
  ),
});

const ChangePassword = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const handleSubmit = async values => {
    try {
      const response = await changePassword(
        user?.femail,
        values[CHANGE_PASSWORD_FIELDNAMES.newPassword],
        values[CHANGE_PASSWORD_FIELDNAMES.oldPassword],
      );
      console.log(response);
      if (response?.status === 200) {
        navigation.goBack();
      }
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  return (
    <ChangePasswordForm
      validationSchema={validationSchema}
      initialValues={initialValue}
      onSubmit={handleSubmit}
    />
  );
};

export default ChangePassword;
