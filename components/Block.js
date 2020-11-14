import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ErrorUI from 'components/ErrorUI';

/**
 * component is used to wrap children in block, like `p` tag.
 * it's very similar to Box component but unlike Box it's used
 * to separate children from other elements in container.
 */
const Block = ({ children }) => (
  <ErrorUI>
    <StyledBlock>{children}</StyledBlock>
  </ErrorUI>
);

Block.propTypes = {
  children: PropTypes.node,
};

export default Block;

const StyledBlock = styled.div`
  display: block;
  padding: 0.5rem 0;
  background-color: transparent;
`;
