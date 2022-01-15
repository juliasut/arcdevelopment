import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header';
import { Toolbar } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Toolbar />
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<div>Hello</div>} />
          <Route exact path="/services" element={<div>servicesgggg</div>} />
          <Route
            exact
            path="/customsoftware"
            element={<div>customsoftware</div>}
          />
          <Route exact path="/mobileapps" element={<div>mobileapps</div>} />
          <Route exact path="/websites" element={<div>websites</div>} />
          <Route exact path="/revolution" element={<div>revolution</div>} />
          <Route exact path="/about" element={<div>about</div>} />
          <Route exact path="/contact" element={<div>contact</div>} />
          <Route exact path="/estimate" element={<div>estimate</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
