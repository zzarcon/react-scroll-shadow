import * as React from 'react';
import {Component} from 'react';
import {ScrollableContent, ScrollableWrapper} from './styled';

export interface ShaddowColors {
  inactive: string;
  active: string;
}

export interface ScrollShadowProps {
  height?: string;
  bottomShadowColors?: ShaddowColors;
  topShadowColors?: ShaddowColors;
  shadowSize?: number;
}

export class ScrollShadow extends Component<ScrollShadowProps> {
  static defaultProps = {
    shadowSize: 2,
    bottomShadowColors: {
      inactive: 'white',
      active: 'gray'
    },
    topShadowColors: {
      inactive: 'white',
      active: 'gray'
    }
  };
  render() {
    const {
      children,
      height,
      bottomShadowColors,
      topShadowColors,
      shadowSize
    } = this.props;
    const style = {height};

    return (
      <ScrollableWrapper
        size={shadowSize}
        topShadowActiveColor={topShadowColors.active}
        bottomShadowActiveColor={bottomShadowColors.active}
      >
        <ScrollableContent
          size={shadowSize}
          topShadowInactiveColor={topShadowColors.inactive}
          bottomShadowInactiveColor={bottomShadowColors.inactive}
          style={style}
        >
          {children}
        </ScrollableContent>
      </ScrollableWrapper>
    );
  }
}

export default ScrollShadow;