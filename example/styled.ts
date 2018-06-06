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
  margin: 0 20px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const AppFooter = styled.div`
  flex-shrink: 0;
  height: 40px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid #ccc;
  align-items: center;

  input {
    margin-left: 10px;
  }
`;

export const ColorsWrapper = styled.div`
  overflow: auto;
  padding: 20px;
  border-right: 1px solid #e2e2e2;
`;

export const ScrollWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 30px;
`;

export const Title = styled.a`
  border-bottom: 2px dashed;
  color: #f4d6db;
  margin: 0;
  font-size: 23px;
  margin-bottom: 10px;
  text-decoration: none;
  display: block;

  &:hover {
    border-bottom-style: solid;
  }
`;

export const ShadowSize = styled.input`
  outline: none;
  margin: 15px;
  width: 50px;
  text-align: center;
  font-size: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;