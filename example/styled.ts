import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body, html {
    height: 100%;
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    font-size: 14px;
  }

  body {
    background: #69b7eb;
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
  width: 800px;
  margin: 0 auto;
  display: flex;
  max-height: 80vh;
  max-width: 90vw;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  overflow: hidden;
  background-color: white;
  box-shadow: 1px 5px 5px 1px rgba(0,0,0,.3);
`;

export const AppHeader = styled.div`
  flex-shrink: 0;
  height: 40px;
  width: 100%;
  text-align: center;
`;

export const AppFooter = styled.div`
  flex-shrink: 0;
  height: 40px;
  width: 100%;
  text-align: center;
`;

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #ccc;
  align-items: center;
`;

export const ColorsWrapper = styled.div`
  overflow: auto;
  padding: 20px;
`;

export const ScrollWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
