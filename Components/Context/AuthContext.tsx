import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

type Props = {
  children: React.ReactNode;
};

type USER = {
  bedroomtype: string;
  deposit: string;
  doj: string;
  faddress: string;
  fadhaar: string;
  famobile: string;
  father: string;
  femail: string;
  fmealtimes: string;
  fmealtype: string;
  fmobile: string;
  fname: string;
  fphone: string;
  gaddress: string;
  gadhaar: string;
  gemail: string;
  gmob: string;
  gname: string;
  grel: string;
  hostel: string;
  id: string;
  idproof: string;
  mother: string;
  mphone: string;
  reg_date: string;
  rent: string;
  rentedtill: string;
  roomnum: string;
  swpswd: string;
};

export const AuthProvider = ({children}: Props) => {
  const [userAuthorized, _setUserAuthorized] = useState(false);
  const [user, _setUser] = useState<USER>();

  const setUserAuthorized = (value: boolean) => {
    _setUserAuthorized(value);
  };

  const setUser = (values: USER) => {
    _setUser({...values});
  };

  return (
    <AuthContext.Provider
      value={{userAuthorized, setUserAuthorized, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
