import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from "./navbar/navbar";
import Carousel from "./home/carousel";
import Cards from "./home/cards";

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
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 30,
            }}>
                <div style={{alignSelf: "center"}}>
                    <Carousel></Carousel>
                </div>
                <div>
                    <Cards/>
                </div>
            </div>
        </div>
      </ThemeProvider>
  );
}

export default App;
