import Axios from './Axios';

const BUILDING_ROUTE = '/api/hostel/building';

export const getAllHostels = () => {
  return Axios.request('GET', `${BUILDING_ROUTE}/getAll`);
};

export const getHostelDetails = (id: string) => {
  return Axios.request('GET', `${BUILDING_ROUTE}/getById?id=${id}`);
};
