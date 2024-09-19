import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './NavBar.css';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <img src="/path/to/logo.png" alt="Logo" className="logo" />
                </Box>
                <Button color="inherit">Button 1</Button>
                <Button color="inherit">Button 2</Button>
                <Button color="inherit">Button 3</Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;