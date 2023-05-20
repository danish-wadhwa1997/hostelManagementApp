import Axios from './Axios';
// import {BACKEND_BASE_URL} from '@env';

export const loginUser = (email: string, password: string) => {
  return Axios.requestData('POST', `/api/auth/login`, {email, password});
  // api/auth/login
  // {email, password})
};
