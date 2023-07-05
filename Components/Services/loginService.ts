import Axios from './Axios';

import {removeToken} from './tokenServices';
export const loginUser = (email: string, password: string) => {
  return Axios.requestData('POST', `/api/login.php`, {
    uem: email,
    pswd: password,
  });
};

export const logoutUser = () => {
  return removeToken();
};
