import React from 'react';
import "./navbar.css"
import {
    AppBar,
    Box, Divider,
    Drawer,
    IconButton,
    List,
    ListItem, ListItemButton, ListItemIcon,
    ListItemText,
    MenuItem,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarItem from "../utils/interfaces/navbarItem";
import SearchBar from "./searchBar/searchBar";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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

const drawerItems: NavbarItem[] = [
    {
        id: "1",
        name: "לאן לפנות"
    },
    {
        id: "2",
        name: "מאמרים מקצועיים"
    },
    {
        id: "3",
        name: "טיפים ראשוניים"
    },
    {
        id: "4",
        name: "עדויות אישיות"
    },
    {
        id: "5",
        name: "כתבות"
    },
    {
        id: "6",
        name: "המאבק באלימות"
    },
    {
        id: "7",
        name: "על העמותה"
    },
    {
        id: "8",
        name: "תרמו לנו"
    }
];

function Navbar() {
    const [state, setState] = React.useState({
        isDrawerOpen: false
    });

    const toggleDrawer =
        (open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, isDrawerOpen: open });
            };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer( false)}
            onKeyDown={toggleDrawer( false)}
        >
            <List>
                {drawerItems.map((item: NavbarItem) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton dir="rtl">
                           {item.name}
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" >
            <Toolbar variant="dense">
                <SearchBar></SearchBar>
                {pages.map((page: NavbarItem) => (
                    <MenuItem key={page.id} >
                        <Typography textAlign="center">{page.name}</Typography>
                    </MenuItem>
                ))}
                <Typography className="header" variant="h6" color="inherit" component="div">
                    אזור אפור
                </Typography>
                <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon onClick={toggleDrawer(true)} />
                    <Drawer
                        anchor="right"
                        open={state["isDrawerOpen"]}
                        onClose={toggleDrawer(false)}
                    >
                        {list()}
                    </Drawer>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
