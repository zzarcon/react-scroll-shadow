import * as React from 'react';
import {shallow} from 'enzyme';
import ScrollShadow from '../src';

describe('ScrollShadow', () => {
  const setup = () => {
    const component = shallow(<ScrollShadow />);

    return {
      component
    };
  };

  it('should work', () => {
    const {component} = setup();

    
  });
});
