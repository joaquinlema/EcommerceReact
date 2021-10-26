import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SearchInput from './SearchInput';
import LogMenu from './LogMenu';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [auth, setAuth] = React.useState(true);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        component={Link} 
                        to="/"
                    >
                        <StoreRoundedIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        E-Commerce FIT Challenge
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <SearchInput />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {auth && (
                            <LogMenu />
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;