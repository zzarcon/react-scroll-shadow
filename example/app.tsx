import * as React from 'react';
import {Component} from 'react';
import ScrollShadow from '../src';
import {Item, AppWrapper, AppHeader, AppFooter} from './styled';

export default class App extends Component {
  render() {
    const items = Array(20).fill().map((value, key) => 
      <Item key={key}>{key}</Item>
    );

    return (
      <AppWrapper>
        <AppHeader>Header</AppHeader>
        <ScrollShadow
          height='300px'
          bottomShadowInactiveColor='aliceblue'
          bottomShadowActiveColor='blue'
        >
          {items}
        </ScrollShadow>
        <AppFooter>Footer</AppFooter>
      </AppWrapper>
    );
  }
}