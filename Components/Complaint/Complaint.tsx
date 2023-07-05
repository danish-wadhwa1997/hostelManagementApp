import React, {useContext} from 'react';
import ComplaintForm from './ComplaintForm';
import {FIELDNAMES} from './constants';
import * as Yup from 'yup';
import {raiseComplaint} from '../Services/bookRoomService';
import {AuthContext} from '../Context/AuthContext';
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

const Complaint = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const handleSubmit = async values => {
    try {
      const response = await raiseComplaint(
        values[FIELDNAMES.name],
        values[FIELDNAMES.phone],
        user?.hostel,
        user?.roomnum,
        values[FIELDNAMES.message],
      );
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ComplaintForm
      validationSchema={validationSchema}
      initialValues={initialValue}
      onSubmit={handleSubmit}
    />
  );
};

export default Complaint;
