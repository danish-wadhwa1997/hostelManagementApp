import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from './Axios';

const TOKEN = 'token';

export const saveToken = async (accessToken: string) => {
  try {
    await AsyncStorage.setItem(TOKEN, accessToken);
  } catch (e) {
    // saving error
    console.log('error occured while saving tokens to localstorage');
  }
};

export const retriveToken = async () => {
  let accessToken;
  try {
    accessToken = await AsyncStorage.getItem(TOKEN);
    return accessToken;
  } catch (e) {
    // error reading value
    console.log('=====error in fetching from local storage======');
    return null;
  }
};

export const verifyToken = () => {
  return Axios.request('GET', '/api/verify-token');
};
