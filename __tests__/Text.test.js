import React from 'react';
import {mount} from 'enzyme';

import Text from 'components/Text';

describe('Text component', () => {
  it('renders without problems', () => {
    const wrapper = mount(<Text>something</Text>);

    expect(wrapper.find(Text).text()).toBe('something');
  });

  it('throw propType error', () => {
    const wrapper = mount(<Text inline>something</Text>);

    expect(wrapper.find(Text).prop('inline')).toBe(true);
  });
})