import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body, html {
    height: 100%;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 14px;
  }

  #app {
    height: 100%;
  }
`;

export const Item = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 15px;
`;

export const AppWrapper = styled.div`
  height: 100%;
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const AppHeader = styled.div`
  flex-shrink: 0;
  height: 40px;
  width: 100%;
`;

export const AppFooter = styled.div`
  flex-shrink: 0;
  height: 40px;
  width: 100%;
`;