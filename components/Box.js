import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ErrorUI from 'components/ErrorUI';

/**
 * component is used to put children in styled div with shadow and paddings
 */
const Box = ({ children }) => (
  <ErrorUI>
    <StyledBox>{children}</StyledBox>
  </ErrorUI>
);

Box.propTypes = {
  children: PropTypes.node,
};

export default Box;

const StyledBox = styled.div`
  display: block;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: white;
  padding: 1.5rem;
`;
