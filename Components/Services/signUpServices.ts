import Axios from './Axios';

export const signUpUser = data => {
  return Axios.requestData('POST', `/api/auth/signup`, data);
};

export const changePassword = (uem, pswd, oldpswd) => {
  return Axios.requestData('POST', '/api/changepswd.php', {uem, pswd, oldpswd});
};
