import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3,
  h4, h5, h6 {
    font-weight: 300;
  }
  
  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: 'Old Standard TT', serif;
    font-weight: 300;
  }
`;

export default GlobalStyle;
