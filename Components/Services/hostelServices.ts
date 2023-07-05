import Axios from './Axios';

const BUILDING_ROUTE = '/api/hostel/building';

export const getAllHostels = () => {
  return Axios.request('GET', `/api/hostels.php`);
};

export const getHostelDetails = (id: string) => {
  return Axios.request('GET', `${BUILDING_ROUTE}/getById?id=${id}`);
};

export const getNotices = () => {
  return Axios.request('GET', `/api/notices.php`);
};
