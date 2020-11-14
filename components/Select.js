import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { colors } from 'configs/styles';

/**
 * select component to choose from several options in dropdown
 */
const Select = ({ children, onChange }) => {
  const handleChange = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    const { target } = e;

    onChange(target.value);
  }, []);

  return <StyledSelect onChange={handleChange}>{children}</StyledSelect>;
};

Select.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onChange: PropTypes.func.isRequired,
};

export default Select;

const StyledSelect = styled.select`
  border: none;
  outline: none;

  > option {
    color: ${colors.black.normal};
  }
`;
