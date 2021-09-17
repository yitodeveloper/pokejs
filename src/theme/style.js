import styled, { createGlobalStyle }  from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    width: 100%;
  }
`;
 
export default GlobalStyle;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;