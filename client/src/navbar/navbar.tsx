import React from 'react';
import "./navbar.css"
import {alpha, AppBar, IconButton, InputBase, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
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

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


function Navbar() {
    return (
        <AppBar position="sticky" >
            <Toolbar variant="dense">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase dir="rtl"
                        placeholder="חפש..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
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
