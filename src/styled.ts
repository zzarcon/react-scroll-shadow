import styled from 'styled-components';

export interface ScrollableWrapperProps {
  bottomShadow?: string;  
}

export interface ScrollableContentProps {
  bottomShadow?: string;
}

export interface BottomShadowProps {
  shadowColor?: string;
}

export const ScrollableWrapper = styled.div`
  position: relative;
`;

export const ScrollableContent = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:after {
    content: '';
    height: 2px;
    width: 100%;
    background: ${(props: ScrollableContentProps) => props.bottomShadow || 'white'};
    position: relative;
    z-index: 23;
    display: flex;
    flex: 1;
    border: 2px solid ${(props: ScrollableContentProps) => props.bottomShadow || 'white'};
  }
`;

export const ShadowContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const BottomShadow = styled.div`
  bottom: 0;
  left: 0;
  background-color: ${(props: BottomShadowProps) => props.shadowColor || 'red'};
  width: inherit;
  height: 2px;
  position: absolute;
  z-index: 1;
`;
