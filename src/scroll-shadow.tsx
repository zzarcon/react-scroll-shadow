import * as React from 'react';
import {Component} from 'react';
import {ScrollableContent, ScrollableWrapper, ShadowContainer, BottomShadow} from './styled';

export interface ScrollShadowProps {
  height?: string;
  bottomShadowInactiveColor?: string;
  bottomShadowActiveColor?: string;
  shadowSize?: number; // TODO: Implement shadow height
}

export interface ScrollShadowState {
  
}

export class ScrollShadow extends Component<ScrollShadowProps, ScrollShadowState> {
  render() {
    const {children, height, bottomShadowInactiveColor, bottomShadowActiveColor} = this.props;
    const style = {height};

    // TODO: Support top and bottom shadows based on properties

    return (
      <ScrollableWrapper
        bottomShadow={bottomShadowActiveColor}
      >
        <ShadowContainer>
          <BottomShadow />
        </ShadowContainer>
        <ScrollableContent
          bottomShadow={bottomShadowInactiveColor}
          style={style}
        >
          {children}
        </ScrollableContent>
      </ScrollableWrapper>
    );
  }
}

export default ScrollShadow;