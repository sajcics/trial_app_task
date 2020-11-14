import React, { useCallback, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Box from 'components/Box';
import Block from 'components/Block';
import Text from 'components/Text';
import Button from 'components/Button';
import ApplicationContext from 'contexts/ApplicationContext';
import Loader from 'components/Loader';
import { useTranslation } from 'react-i18next';

const About = () => {
  const router = useRouter();
  const { setUserData, userData, setLogout } = useContext(ApplicationContext);
  const { firstName, lastName, id, email } = userData || {};

  const { t } = useTranslation();

  const fetchData = useCallback(async (jwt) => {
    let results = null;
    try {
      results = await fetch('/api/about', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application-json',
        },
        body: JSON.stringify({
          id: id,
          jwt: jwt,
        }),
      });

      const { data } = await results.json();
      setUserData(data);
    } catch (err) {
      console.error(err);
    }
  });

  useEffect(() => {
    const jwt = localStorage.getItem('token');

    if (!jwt || !id) {
      router.push('/');
    }

    fetchData(jwt);
  }, []);

  const handleLogout = useCallback(() => {
    setLogout();
    router.push('/');
  }, []);

  if (Object.keys(userData).length === 0) {
    return (
      <Box>
        <Loader text="Loading ...." />
      </Box>
    );
  }

  return (
    <Box>
      <StyledFlexbox>
        <div>
          <Text color="green">Id: </Text>
        </div>
        <div>
          <Text>{id}</Text>
        </div>
      </StyledFlexbox>

      <StyledFlexbox>
        <div>
          <Text color="green">{t('firstName')}: </Text>
        </div>
        <div>
          <Text>{firstName}</Text>
        </div>
      </StyledFlexbox>
      <StyledFlexbox>
        <div>
          <Text color="green">{t('lastName')}: </Text>
        </div>
        <div>
          <Text>{lastName}</Text>
        </div>
      </StyledFlexbox>
      <StyledFlexbox>
        <div>
          <Text color="green">{t('email')}: </Text>
        </div>
        <div>
          <Text>{email}</Text>
        </div>
      </StyledFlexbox>

      <Block>
        <Button theme="danger" onClick={handleLogout}>
          Logout
        </Button>
      </Block>
    </Box>
  );
};

export default About;

const StyledFlexbox = styled.div`
  display: flex;

  > div:first-of-type {
    flex: 2;
  }

  > div {
    padding: 0.5rem 0;
    flex: 1;
  }
`;
