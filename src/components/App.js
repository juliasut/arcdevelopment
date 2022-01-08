import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Toolbar } from '@material-ui/core';
import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar />
    </ThemeProvider>
  );
}

export default App;
