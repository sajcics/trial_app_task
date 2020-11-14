import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ErrorUI from 'components/ErrorUI';

/** spinner/loader used when some content is loading. Just to indicate to
 * user that something is happening in background
 */
const Loader = ({ text = '' }) => (
  <ErrorUI>
    <Wrapper>
      <StyledLoader />

      <div stlye={{ marginLeft: '5px' }}>{text}</div>
    </Wrapper>
  </ErrorUI>
);

Loader.propTypes = {
  text: PropTypes.string,
};

export default Loader;

const StyledLoader = styled.div`
  display: inline-block;

  &:after {
    content: ' ';
    display: block;
    width: 10px;
    height: 10px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fdd transparent #fdd transparent;
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;
