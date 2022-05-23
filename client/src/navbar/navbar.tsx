import React from 'react';
import "./navbar.css"
import {AppBar, IconButton, InputBase, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItem from "../utils/interfaces/navbarItem";

const pages: NavbarItem[] = [
    {
        id: "1",
        name: "זוגיות בריאה"
    },
    {
        id: "2",
        name: "אלימות וניצול"
    },
    {
        id: "3",
        name: "עזרה ותמיכה"
    },
];

function Navbar() {
    return (
        <AppBar position="sticky" >
            <Toolbar variant="dense">
                {pages.map((page: NavbarItem) => (
                    <MenuItem key={page.id} >
                        <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                ))}
                <Typography className="header" variant="h6" color="inherit" component="div">
                    אזור אפור
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
