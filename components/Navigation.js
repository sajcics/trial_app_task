import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { colors } from 'configs/styles';
import ErrorUI from 'components/ErrorUI';
import Select from 'components/Select';

/** simple/dummy navigation that is only displayed in first application load.
 */
const Navigation = ({ children = null }) => {
  if (!children) {
    return <>dd</>;
  }

  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback((value) => {
    i18n.changeLanguage(value);
  }, []);

  return (
    <ErrorUI>
      <StyledNavigation>
        <div>{children}</div>

        <Select onChange={handleChangeLanguage}>
          <option>en</option>
          <option>de</option>
          <option>cro</option>
        </Select>
      </StyledNavigation>
    </ErrorUI>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  background-color: #fbfbfb;
  border-bottom: 1px solid ${colors.gray.light};
  padding: 1rem 0.5rem;
  color: ${colors.black.normal};
  display: flex;
  justify-content: space-between;

  > div > * {
    margin: 0 0.5rem;
  }

  > div > a {
    text-decoration: none;
    color: ${colors.black.normal};

    &:hover {
      color: ${colors.green.normal};
      text-decoration: underline;
    }
  }
`;
