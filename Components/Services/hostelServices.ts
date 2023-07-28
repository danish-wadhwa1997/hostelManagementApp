import Axios from './Axios';

export const getAllHostels = () => {
  return Axios.request('GET', `/api/hostels.php`);
};

export const getHostelDetails = (hostelName: string) => {
  return Axios.request('GET', `api/hostel-detail.php?hostel=${hostelName}`);
};

export const getNotices = () => {
  return Axios.request('GET', `/api/notices.php`);
};
