import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from 'configs/styles';
import ErrorUI from 'components/ErrorUI';

/** input of all types */
const TextInput = ({ type = 'text', ...props }) => {
  return (
    <ErrorUI>
      <StyledInput type={type} {...props} />
    </ErrorUI>
  );
};

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
};

export default TextInput;

const StyledInput = styled.input`
  border: 1px solid ${colors.gray.light};
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.25rem;
  outline: none;

  &:first-of-type {
    margin-left: 0;
  }

  &:focus {
    box-shadow: 0 0 2px ${colors.gray.normal};
  }
`;
