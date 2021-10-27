import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import BuysItem from './BuysItem';

export default function BuysList() {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <BuysItem />
            <Divider variant="inset" component="li" />
            <BuysItem />
            <Divider variant="inset" component="li" />
            <BuysItem />
            <Divider variant="inset" component="li" />
        </List>
    );
}