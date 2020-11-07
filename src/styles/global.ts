import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    margin: 0;
    padding: 2rem;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    background-color: #eeeeee;
  }
`;

export default GlobalStyle;
