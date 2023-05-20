import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({children}: Props) => {
  const [userAuthorized, _setUserAuthorized] = useState(false);

  const setUserAuthorized = (value: boolean) => {
    _setUserAuthorized(value);
  };

  return (
    <AuthContext.Provider value={{userAuthorized, setUserAuthorized}}>
      {children}
    </AuthContext.Provider>
  );
};
