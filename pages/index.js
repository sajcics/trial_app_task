import React from 'react';
import Box from 'components/Box';
import { useTranslation } from 'react-i18next';

export default function Index() {
  const { t } = useTranslation();

  return (
    <Box>
      <h1>{t('welcome')}</h1>
      <ul>
        <li>validation on frontend using Indicative.js and displaying errors on the form</li>
        <li>validation on backend using Validate.js and displaying errors on the form</li>
        <li>styling UI components with library StyledComponents</li>
        <li>saving JWT token on localStorage</li>
        <li>display `loading` message when request is send to backend</li>
        <li>
          disable whole form until response came from backend (with this we are disabling any
          additional requests to backend
        </li>
        <li>multi-language support</li>
        <li>error boundary</li>
        <li>simple tests on UI components</li>
        <li>redirect page to homepage if token and user id is undefined</li>
      </ul>

      <br />
      <h2>Drawbacks</h2>
      <ul>
        <li>
          context of application is not saved on server, so any refreshment will cause data lost
        </li>
        <li>eslint and prettier configuration only for React</li>
        <li>fast jest and enzyme configuration</li>
      </ul>
    </Box>
  );
}
