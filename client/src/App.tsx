import React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from "./navbar/navbar";
import Carousel from "./home/carousel";
import Cards from "./home/cards";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FAF9F6',
    },
    secondary: {
      main: '#FFF',
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
                padding: 20,
            }}>
                <h4 style={{alignSelf: "center", marginTop: 40}}>אלימות סמויה רוצחת בשקט - אל תישארי באפור</h4>
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
