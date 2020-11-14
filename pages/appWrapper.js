import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import ApplicationContext from 'contexts/ApplicationContext';
import Navigation from 'components/Navigation';
import Button from 'components/Button';

const AppWrapper = ({ children }) => {
  const [userData, setData] = useState({});
  const [logged, setLogged] = useState(null);

  const setUserData = useCallback((values = {}) => {
    const newData = {
      ...userData,
      ...values,
    };

    setData(newData);
    localStorage.setItem('user', JSON.stringify(newData));
  }, []);

  const setLogout = useCallback(() => {
    localStorage.removeItem('token');
    setData({});
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setUserData(JSON.parse(user || '{}'));
  }, []);

  useEffect(() => {
    const exists = !!localStorage.getItem('token');
    const { id } = userData;
    setLogged(exists && id);
  }, [userData.id]);

  return (
    <ApplicationContext.Provider
      value={{
        setUserData,
        setLogout,
        userData,
      }}
    >
      <Navigation>
        <Link href="/">Home</Link>
        {!logged && <Link href="/login">Login</Link>}
        {logged && (
          <>
            <Link href="/about">About</Link>
            <Button onClick={setLogout} theme="danger">
              Logout
            </Button>
          </>
        )}
      </Navigation>
      {children}
    </ApplicationContext.Provider>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;
