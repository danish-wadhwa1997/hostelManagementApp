import Axios from './Axios';

const ROOM_ROUTE = '/api/hostel/room';

export const getAllRooms = (hostelId: string) => {
  return Axios.request('GET', `${ROOM_ROUTE}/getAll?id=${hostelId}`);
};

export const getRoomByHostelAndRoomNumber = (
  roomNumber: string,
  hostelId: string,
) => {
  return Axios.request(
    'GET',
    `${ROOM_ROUTE}/getById?id=${hostelId}&roomNumber=${roomNumber}`,
  );
};
