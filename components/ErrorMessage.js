import React from 'react';
import PropTypes from 'prop-types';

import Text from 'components/Text';
import ErrorUI from 'components/ErrorUI';

/**
 * used to show error message that Form returned from backend or validation action.
 * usually used to put bellow input component (validation) or at the end of form to show general
 * form errors.
 */
const ErrorMessage = ({ text }) => (
  <ErrorUI>
    {text && <Text color="red">{text}</Text>}
    {!text && <Text>&nbsp;</Text>}
  </ErrorUI>
);

ErrorMessage.propTypes = {
  text: PropTypes.string,
};

export default ErrorMessage;
