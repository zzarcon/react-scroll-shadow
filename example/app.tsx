import * as React from 'react';
import {Component} from 'react';
import ScrollShadow from '../src';
import {Item, AppWrapper, AppHeader, AppFooter} from './styled';

export default class App extends Component {
  render() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      items.push(<Item key={i}>{i}</Item>);
    }

    return (
      <AppWrapper>
        <AppHeader>Header</AppHeader>
        <ScrollShadow
          bottomShadowColors={{
            active: 'gray',
            inactive: 'white'
          }}

          topShadowColors={{
            active: 'gray',
            inactive: 'white'
          }}

          shadowSize={2}
        >
          {items}
        </ScrollShadow>
        <AppFooter>Footer</AppFooter>
      </AppWrapper>
    );
  }
}