import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import BuysItem from './BuysItem';
import { useSelector } from 'react-redux';

export default function BuysList() {
    const { productosComprados } = useSelector(state => state.ProductReducer);

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {productosComprados.length > 0 && productosComprados.map((elem,index) => (
                <>
                    <BuysItem producInfo={elem} key={index}/>
                    <Divider variant="inset" component="li" />
                </>
            ))}
        </List>
    );
}