import * as React from 'react';
import {Component, ReactNode, ChangeEvent} from 'react';
import GHCorner from 'react-gh-corner';
import ScrollShadow, { ShadowColors } from '../src';
import {ShadowSize, Title, ScrollWrapper, Item, AppWrapper, AppHeader, AppFooter, ColorWrapper, ColorsWrapper} from './styled';

interface AppProps {

}

interface ShadowPosition {
  bottomShadowColors: ShadowColors;
  topShadowColors: ShadowColors;
}

type AppState = ShadowPosition & {
  shadowSize: number;
}

const items: ReactNode[] = [];

for (let i = 0; i < 20; i++) {
  items.push(<Item key={i}>{i}</Item>);
}

const repoUrl = 'https://github.com/zzarcon/react-scroll-shadow';

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

  onColorChange = (position: keyof ShadowPosition, property: keyof ShadowColors) => (e: ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    const shadowColors: ShadowColors = {
      ...this.state[position],
      [property]: color
    };

    this.setState({
      [position]: shadowColors
    } as any);
  }

  onShadowSizeChange = (e: any) => {
    const shadowSize = e.target.value;
    this.setState({shadowSize});
  }

  render() {
    const {bottomShadowColors, topShadowColors, shadowSize} = this.state;

    return (
      <AppWrapper>
        <GHCorner href={repoUrl} />
        <ColorsWrapper>
          <Title href={repoUrl}>
            🕸 react-scroll-shadow 🕸
          </Title>
          <ColorWrapper>
            Top shadow active <input type="color" value={topShadowColors.active} onChange={this.onColorChange('topShadowColors', 'active')} />
          </ColorWrapper>
          <ColorWrapper>
            Top shadow inactive <input type="color" value={topShadowColors.inactive} onChange={this.onColorChange('topShadowColors', 'inactive')} />
          </ColorWrapper>
          <ColorWrapper>
            Bottom shadow active <input type="color" value={bottomShadowColors.active} onChange={this.onColorChange('bottomShadowColors', 'active')} />
          </ColorWrapper>
          <ColorWrapper>
            Bottom shadow inactive <input type="color" value={bottomShadowColors.inactive} onChange={this.onColorChange('bottomShadowColors', 'inactive')} />
          </ColorWrapper>
          Shadow size <ShadowSize value={shadowSize} onChange={this.onShadowSizeChange} type="number" />

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