import React, {useContext} from 'react';
import SignUpForm from './SignUpForm';
import {SIGNUP_FIELD_NAME} from './Constants';
import * as Yup from 'yup';
import {signUpUser} from '../Services/signUpServices';
import {TokenContext} from '../Context/TokenContext';

type SubmitFormValue = {
  aadharId: string;
  address: string;
  confirmPassword: string;
  contactNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
const initialValues = {
  [SIGNUP_FIELD_NAME.email]: '',
  [SIGNUP_FIELD_NAME.password]: '',
  [SIGNUP_FIELD_NAME.confirmPassword]: '',
  [SIGNUP_FIELD_NAME.firstName]: '',
  [SIGNUP_FIELD_NAME.lastName]: '',
  [SIGNUP_FIELD_NAME.contactNumber]: '',
  [SIGNUP_FIELD_NAME.address]: '',
  [SIGNUP_FIELD_NAME.aadharId]: '',
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const aadharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
const passwordRegex =
  /^\S*(?=\S{8,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;

const validationSchema = Yup.object({
  [SIGNUP_FIELD_NAME.email]: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  [SIGNUP_FIELD_NAME.password]: Yup.string()
    .matches(passwordRegex, {
      message:
        ' Password must contain 8 characters, which consists of 1 upper case , 1 lower case english alphabet, 1 number & 1 special character',
    })
    .required('Required'),
  [SIGNUP_FIELD_NAME.confirmPassword]: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
  [SIGNUP_FIELD_NAME.firstName]: Yup.string().required('Required'),
  [SIGNUP_FIELD_NAME.lastName]: Yup.string().required('Required'),
  [SIGNUP_FIELD_NAME.contactNumber]: Yup.string()
    .matches(phoneRegExp, {message: 'Not a valid phone number'})
    .min(10, 'Too short')
    .max(10, 'too long')
    .required('required'),
  [SIGNUP_FIELD_NAME.address]: Yup.string().required('Required'),
  [SIGNUP_FIELD_NAME.aadharId]: Yup.string()
    .matches(aadharRegex, {
      message: 'Not a valid aadhar number',
    })
    .required('required'),
});

const SignUp = () => {
  const {setToken} = useContext(TokenContext);

  console.log('called');
  const handleSubmit = async (values: SubmitFormValue) => {
    console.log('sign up', values);
    const newValues = {...values, role: 'guest'};
    delete newValues.confirmPassword;
    try {
      const {
        data: {token, user},
      } = await signUpUser(newValues);
      setToken(token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SignUpForm
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={initialValues}
    />
  );
};

export default SignUp;
