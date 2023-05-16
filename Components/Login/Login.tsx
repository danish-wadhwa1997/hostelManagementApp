import React from 'react';
import * as Yup from 'yup';
import {LOGIN_FIELD_NAME} from './Constants';
import LoginForm from './LoginForm';

const initialValue = {
  [LOGIN_FIELD_NAME.email]: '',
  [LOGIN_FIELD_NAME.password]: '',
};

const handleSubmit = values => {
  console.log('values', values);
};

const validationSchema = Yup.object({
  [LOGIN_FIELD_NAME.email]: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  [LOGIN_FIELD_NAME.password]: Yup.string().required('Required'),
});

const Login = () => {
  return (
    <LoginForm
      validationSchema={validationSchema}
      initialValues={initialValue}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
