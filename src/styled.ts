import styled from 'styled-components';

export interface ScrollableWrapperProps {
  size: number;
  topShadowActiveColor: string;
  bottomShadowActiveColor: string;
}

export interface ScrollableContentProps {
  size: number;
  topShadowInactiveColor: string;
  bottomShadowInactiveColor: string;
}

export const ScrollableWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  position: relative;
  // Next line is important hack/fix for Firefox
  // https://stackoverflow.com/questions/28636832/firefox-overflow-y-not-working-with-nested-flexbox
  min-height:0;
  
  &::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    right:0;
    height: ${({size}: ScrollableWrapperProps) => size}px;
    background: ${({topShadowActiveColor}: ScrollableWrapperProps) => topShadowActiveColor};
    z-index: 10;
  }
  &::after{
    content: '';
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    height: ${({size}: ScrollableWrapperProps) => size}px;
    background: ${({bottomShadowActiveColor}: ScrollableWrapperProps) => bottomShadowActiveColor};
    z-index: 10;
  }
`;

export const ScrollableContent = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 11;
  display: flex;
  flex-direction: column; 
  
  // Next line is important hack/fix for Safari
  // https://stackoverflow.com/questions/40895387/z-index-not-working-on-safari-fine-on-firefox-and-chrome
  transform: translate3d(0,0,0);
  
  &::before{
    content: '';
    height: ${({size}: ScrollableContentProps) => size}px;
    width: 100%;
    background: ${({topShadowInactiveColor}: ScrollableContentProps) => topShadowInactiveColor};
    flex-shrink: 0;  
  }
  &::after{
    content: '';
    height: ${({size}: ScrollableContentProps) => size}px;;
    width: 100%;
    background: ${({bottomShadowInactiveColor}: ScrollableContentProps) => bottomShadowInactiveColor};
    flex-grow: 1;
    flex-shrink: 0;
  }
`;