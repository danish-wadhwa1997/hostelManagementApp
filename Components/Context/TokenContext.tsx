import React, {createContext, useEffect, useState, useContext} from 'react';
import {retriveToken, saveToken, verifyToken} from '../Services/tokenServices';
import {AuthContext} from './AuthContext';
export const TokenContext = createContext({});

type Props = {
  children: React.ReactNode;
};

export const TokenProvider = ({children}: Props) => {
  const [token, _setToken] = useState<string | null>(null);
  const {setUserAuthorized, setUser} = useContext(AuthContext);

  useEffect(() => {
    try {
      const getToken = async () => {
        const value = await retriveToken();
        if (value) {
          // verify token
          // verifyToken()
          //   .then(res => {
          //     _setToken(value);
          //     setUserAuthorized(true);
          //   })
          //   .catch(err => {
          //     console.error(err);
          //     _setToken(null);
          //     setUserAuthorized(false);
          //   });
          setUser(JSON.parse(value));
          setUserAuthorized(true);
        } else {
          _setToken(null);
          setUserAuthorized(false);
        }
      };
      getToken();
    } catch (error) {
      console.error(error);
      _setToken(null);
      setUserAuthorized(false);
    }
  }, []);

  const setToken = async (value: string) => {
    _setToken(value);
    setUserAuthorized(true);
    await saveToken(value);
  };
  return (
    <TokenContext.Provider value={{token, setToken}}>
      {children}
    </TokenContext.Provider>
  );
};
