import Axios from './Axios';

import {removeToken} from './tokenServices';
export const loginUser = (email: string, password: string) => {
  return Axios.requestData('POST', `/api/auth/login`, {email, password});
};

export const logoutUser = () => {
  return removeToken();
};
