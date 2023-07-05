import React from 'react';
import BookingRequestForm from './BookingRequestForm';
import {FIELDNAMES} from './constants';
import * as Yup from 'yup';
import {bookRoom} from '../Services/bookRoomService';
const initialValue = {
  [FIELDNAMES.name]: '',
  [FIELDNAMES.phone]: '',
  [FIELDNAMES.message]: '',
};

const validationSchema = Yup.object({
  [FIELDNAMES.name]: Yup.string().required('Required'),
  [FIELDNAMES.phone]: Yup.string().required('Required'),
  [FIELDNAMES.message]: Yup.string().required('Required'),
});

const BookingRequest = ({route, navigation}) => {
  const {hostel} = route.params;

  const handleSubmit = async values => {
    console.log(values, hostel);
    try {
      const response = await bookRoom(
        values[FIELDNAMES.name],
        values[FIELDNAMES.phone],
        hostel,
        values[FIELDNAMES.message],
      );
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <BookingRequestForm
      validationSchema={validationSchema}
      initialValues={initialValue}
      onSubmit={handleSubmit}
    />
  );
};

export default BookingRequest;
