import React, { useCallback, useContext } from 'react';
import { useRouter } from 'next/router';

import Form from 'components/Form';
import TextInput from 'components/TextInput';
import Button from 'components/Button';
import Box from 'components/Box';
import Text from 'components/Text';
import Block from 'components/Block';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import ApplicationContext from 'contexts/ApplicationContext';

const Login = () => {
  const router = useRouter();
  const { setUserData } = useContext(ApplicationContext);

  const handleSuccess = useCallback(({ jwt, id }) => {
    localStorage.setItem('token', jwt);
    setUserData({ id });

    router.push('/about');
  }, []);

  const rules = {
    username: 'required|max:20',
    password: 'required|max:20',
  };

  return (
    <Box>
      <Form rules={rules} method="post" url="api/login" onSuccess={handleSuccess}>
        {({ loading, fieldErrors, formError }) => (
          <>
            <Block>
              <Text>Username</Text>
              <TextInput name="username" disabled={loading} autocomplete="false" />
              <ErrorMessage text={fieldErrors.username} />
            </Block>

            <Block>
              <Text>Password</Text>
              <TextInput name="password" disabled={loading} type="password" autocomplete="false" />
              <ErrorMessage text={fieldErrors.password} />
            </Block>

            <Button type="submit" disabled={loading}>
              Submit
            </Button>

            {loading && (
              <Block>
                <Loader text="Loading ...." />
              </Block>
            )}
            <ErrorMessage text={formError} />
          </>
        )}
      </Form>
    </Box>
  );
};

export default Login;
