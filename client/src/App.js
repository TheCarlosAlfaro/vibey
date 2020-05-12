import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Navbar from './components/Navbar';
import MusicList from './components/MusicList';
import EditMusic from './components/EditMusic';
import CreateMusic from './components/CreateMusic';
import CreateUser from './components/CreateUser';

const theme = {
  blue: '#4968D4',
  black: '#2B2B2B',
  grey: '#D7D7D7',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/NotoSansJP-Medium.otf') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Inner>
          <Route path="/" exact component={MusicList} />
          <Route path="/edit/:id" component={EditMusic} />
          <Route path="/create" component={CreateMusic} />
          <Route path="/user" component={CreateUser} />
        </Inner>
      </Router>
    </ThemeProvider>
  );
}

export default App;
