import React from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MainTemplate;
