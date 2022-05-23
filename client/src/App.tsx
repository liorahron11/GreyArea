import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from "./navbar/navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: '#7D1E6A',
    },
    secondary: {
      main: '#EEB0B0',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <div className="container">
         <Navbar></Navbar>
        </div>
      </ThemeProvider>
  );
}

export default App;
