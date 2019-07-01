import React from 'react';
import { oneOfType, node, arrayOf } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';
import Menu from 'components/Menu';
import { Wrapper } from './styles';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Menu />
        <Wrapper>{children}</Wrapper>
      </>
    </ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MainTemplate;
