import React, {useContext} from 'react';
import * as Yup from 'yup';
import {LOGIN_FIELD_NAME} from './Constants';
import LoginForm from './LoginForm';
import {loginUser} from '../Services/loginService';
import {AuthContext} from '../Context/AuthContext';
import {TokenContext} from '../Context/TokenContext';
const initialValue = {
  [LOGIN_FIELD_NAME.email]: '',
  [LOGIN_FIELD_NAME.password]: '',
};

const validationSchema = Yup.object({
  [LOGIN_FIELD_NAME.email]: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  [LOGIN_FIELD_NAME.password]: Yup.string().required('Required'),
});

const Login = () => {
  const {setUserAuthorized, setUser} = useContext(AuthContext);
  const {setToken} = useContext(TokenContext);
  const handleSubmit = async values => {
    try {
      const response = await loginUser(
        values[LOGIN_FIELD_NAME.email],
        values[LOGIN_FIELD_NAME.password],
      );
      console.log(response.data[0]);
      if (response?.data?.Status) {
        setUserAuthorized(false);
        setUser();
      } else {
        setUserAuthorized(true);
        console.log(response.data[0]);
        setUser(response.data[0]);
        setToken(JSON.stringify(response.data[0]));
      }
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  };

  return (
    <LoginForm
      validationSchema={validationSchema}
      initialValues={initialValue}
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
