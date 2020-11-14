import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from 'configs/styles';
import ErrorUI from 'components/ErrorUI';

/** span element that used to show text. It can act as 'p' (block) element  and as 's' (inline).
 * used to style text with color but it can be upgraded to more properties such as font weight and
 * similar
 */
const Text = (props) => {
  const { inline = false, color = 'black', children } = props;

  const spanCss = useMemo(
    () => ({
      display: inline ? 'inline-block' : 'block',
      color: colors[color]['normal'],
    }),
    [inline, color]
  );

  return (
    <ErrorUI>
      <StyledSpan spanCss={spanCss}>{children}</StyledSpan>
    </ErrorUI>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.number,
    PropTypes.func,
  ]),
  inline: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(colors)),
};

export default Text;

const StyledSpan = styled.span`
  ${({ spanCss }) => css(spanCss)};
`;
