import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ErrorUI from 'components/ErrorUI';
import { colors } from 'configs/styles';

/**
 * used for actions like submitting to form
 */
const Button = ({ theme = 'success', onClick = undefined, children, disabled = false }) => (
  <ErrorUI>
    <StyledButton theme={theme} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  </ErrorUI>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['success', 'danger']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;

const StyledButton = styled.button`
  background-color: ${({ theme }) =>
    theme === 'danger' ? colors.red.normal : colors.green.normal};
  padding: 0.5rem 0.7rem;
  border: none;
  border-radius: 0.25rem;
  color: white;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'danger' ? colors.red.light : colors.green.light};
  }
`;
