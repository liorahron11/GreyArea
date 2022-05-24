import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from "./navbar/navbar";
import Carousel from "./home/carousel";

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
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div style={{display: "flex", justifyContent: "center", alignSelf: 'stretch', padding: 30}}>
                <Carousel/>
            </div>
        </div>

      </ThemeProvider>
  );
}

export default App;
