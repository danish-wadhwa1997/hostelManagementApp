import Axios from './Axios';

export const bookRoom = (
  fname: string,
  fphone: string,
  hostel: string,
  msg: string,
) => {
  return Axios.requestData('POST', '/api/requests.php', {
    fname,
    fphone,
    hostel,
    msg,
  });
};

export const raiseComplaint = (
  fname: string,
  fphone: string,
  hostel: string,
  room: string,
  msg: string,
) => {
  return Axios.requestData('POST', '/api/complaint.php', {
    fname,
    fphone,
    hostel,
    room,
    msg,
  });
};
