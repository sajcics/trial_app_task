import React from 'react';
import {mount} from 'enzyme';

import ErrorMessage from 'components/ErrorMessage';
import Text from 'components/Text';

describe('ErrorMessage component', () => {
  it('renders without problems', () => {
    const wrapper = mount(<ErrorMessage text="something" />);

    expect(wrapper.find(ErrorMessage).find(Text).text()).toBe('something');
  });

  it('throw propType error', () => {
    const wrapper = mount(<ErrorMessage />);

    expect(wrapper.find(ErrorMessage).find(Text).text()).toEqual('\u00a0');
  });
})