import { Paper } from '@mui/material';
import React from 'react'
import ProductItem from './ProductItem';

const ProductList = () => {
    const arr = [1,2,3,4,5];

    return (
        <Paper elevation={3} >
            {arr.map((elem,index) => (
                <ProductItem key={index}/>
            ))}
        </Paper>
    )
}

export default ProductList;
