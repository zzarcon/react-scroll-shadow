import * as React from 'react';
import {Component, ReactNode, ChangeEvent} from 'react';
import ScrollShadow, { ShaddowColors } from '../src';
import {ScrollWrapper, Item, AppWrapper, AppHeader, AppFooter, ColorWrapper, ColorsWrapper} from './styled';

interface AppProps {

}

interface ShadowPosition {
  bottomShadowColors: ShaddowColors;
  topShadowColors: ShaddowColors;
}

type AppState = ShadowPosition & {
  shadowSize: number;
}

const items: ReactNode[] = [];

for (let i = 0; i < 10; i++) {
  items.push(<Item key={i}>{i}</Item>);
}


export default class App extends Component<AppProps, AppState> {
  state: AppState = {
    bottomShadowColors: {
      active: '#cccccc',
      inactive: '#ffffff'
    },
    topShadowColors: {
      active: '#cccccc',
      inactive: '#ffffff'
    },
    shadowSize: 2
  };

  onColorChange = (position: keyof ShadowPosition, property: keyof ShaddowColors) => (e: ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    const shadowColors: ShaddowColors = {
      ...this.state[position],
      [property]: color
    };

    this.setState({
      [position as any]: shadowColors
    });
  }

  render() {
    const {bottomShadowColors, topShadowColors, shadowSize} = this.state;

    return (
      <AppWrapper>
        <ColorsWrapper>
          <ColorWrapper>
            Top shadow active: <input type="color" value={topShadowColors.active} onChange={this.onColorChange('topShadowColors', 'active')} />
          </ColorWrapper>
          <ColorWrapper>
            Top shadow inactive: <input type="color" value={topShadowColors.inactive} onChange={this.onColorChange('topShadowColors', 'inactive')} />
          </ColorWrapper>
          <ColorWrapper>
            Bottom shadow active: <input type="color" value={bottomShadowColors.active} onChange={this.onColorChange('bottomShadowColors', 'active')} />
          </ColorWrapper>
          <ColorWrapper>
            Bottom shadow inactive: <input type="color" value={bottomShadowColors.inactive} onChange={this.onColorChange('bottomShadowColors', 'inactive')} />
          </ColorWrapper>
        </ColorsWrapper>
        <ScrollWrapper>
          <AppHeader>Header</AppHeader>
          <ScrollShadow
            topShadowColors={topShadowColors}
            bottomShadowColors={bottomShadowColors}
            shadowSize={shadowSize}
          >
            {items}
          </ScrollShadow>
          <AppFooter>Footer</AppFooter>
        </ScrollWrapper>
      </AppWrapper>
    );
  }
}