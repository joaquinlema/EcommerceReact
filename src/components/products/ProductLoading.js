import React from 'react';
import { Grid } from '@mui/material';
import ProductItemLoading from './ProductItemLoading';

const ProductLoading = () => {
    return (
        <Grid container spacing={3}>
            {Array.from(new Array(6)).map((elem, index) => (
                <ProductItemLoading key={index} />
            ))
            }
        </Grid>
    )
}

export default ProductLoading;
