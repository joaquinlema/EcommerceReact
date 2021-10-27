import React from 'react';
import { AccountCircle } from '@mui/icons-material';
import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { Link } from 'react-router-dom';

const LogMenu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button onClick={handleMenu} variant="text" color="inherit" size="large" startIcon={<AccountCircle />}>
                Nombre persona
            </Button>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to='/compras' onClick={handleClose}>
                    <ListItemIcon>
                        <ShoppingCartRoundedIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Consultar Compra</ListItemText>
                </MenuItem>
            </Menu>
        </div>
    )
}

export default LogMenu;
