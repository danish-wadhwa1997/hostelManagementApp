import Axios from './Axios';

export const signUpUser = data => {
  return Axios.requestData('POST', `/api/auth/signup`, data);
};
