import axios from 'axios';
import {BACKEND_BASE_URL} from '@env';
import {retriveToken} from './tokenServices';
const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
  // timeout: 1000,
  // 'Access-Control-Allow-Origin': '*',
  // 'Content-Type': 'application/json',
});

const base = async param => {
  return await instance({
    method: param.method,
    url: param.url,
    data: param.data,
  })
    .then(res => {
      return Promise.resolve(res);
    })
    .catch(err => {
      if (err.response) {
        return Promise.reject(err.response);
      } else {
        return Promise.reject('TIMEOUT');
      }
    });
};

const request = async (method: string, url: string) => {
  return await base({method, url})
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

const requestData = async (method: string, url: string, data: object) => {
  return await base({method, url, data})
    .then(res => Promise.resolve(res))
    .catch(err => Promise.reject(err));
};

//setup axios interceptor
instance.interceptors.request.use(
  async config => {
    if (
      config?.url &&
      config.url !== '/api/auth/login' &&
      config.url !== '/api/auth/signup'
    ) {
      await retriveToken()
        .then((token: string | null) => {
          if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
          }
        })
        .catch(error => {
          console.log(
            '=====something went wrong in fething the tokens from local storage======',
          );
        });
    }
    console.log(config);
    return config;
  },
  error => {
    //handle error here (logout user for now)
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  res => {
    return res;
  },
  async err => {
    const originalConfig = err.config;
    return Promise.reject(err);
  },
);

export default {
  request,
  requestData,
};
