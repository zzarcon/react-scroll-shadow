import * as React from 'react';
import {shallow} from 'enzyme';
import ScrollShadow, {ScrollShadowProps} from '../src';
import { ScrollableWrapper, ScrollableContent } from '../src/styled';

describe('ScrollShadow', () => {
  const setup = (props?: Partial<ScrollShadowProps>) => {
    const component = shallow(<ScrollShadow {...props} />);

    return {
      component
    };
  };

  it('should render children', () => {
    const component = shallow(
      <ScrollShadow>
        <ul></ul>
        <ul></ul>
      </ScrollShadow>
    );

    expect(component.find('ul')).toHaveLength(2);
  });

  it('should use the given colors', () => {
    const {component} = setup({
      bottomShadowColors: {
        inactive: 'blue',
        active: 'green'
      },
      topShadowColors: {
        inactive: '#ccc',
        active: 'pink'
      }
    });

    expect(component.find(ScrollableWrapper).prop('topShadowActiveColor')).toEqual('pink');
    expect(component.find(ScrollableWrapper).prop('bottomShadowActiveColor')).toEqual('green');
    expect(component.find(ScrollableContent).prop('topShadowInactiveColor')).toEqual('#ccc');
    expect(component.find(ScrollableContent).prop('bottomShadowInactiveColor')).toEqual('blue');
  });

  it('should set the given height', () => {
    const {component} = setup();

    expect(component.find(ScrollableContent).prop('style')).toEqual({});
    component.setProps({height: '100px'});
    expect(component.find(ScrollableContent).prop('style')).toEqual({height: '100px'});
  });

  it('should use the given shadow size', () => {
    const {component} = setup();

    expect(component.find(ScrollableWrapper).prop('size')).toEqual(2);
    expect(component.find(ScrollableContent).prop('size')).toEqual(2);
    component.setProps({shadowSize: 5});
    expect(component.find(ScrollableWrapper).prop('size')).toEqual(5);
    expect(component.find(ScrollableContent).prop('size')).toEqual(5);
  });
});
