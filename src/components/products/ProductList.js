import { Grid, Paper } from '@mui/material';
import React from 'react'
import ProductItem from './ProductItem';

const ProductList = () => {
    const arr = [1, 2, 3, 4, 5];

    return (
        <Paper elevation={3}
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}>
            <Grid container spacing={2}>
                {arr.map((elem, index) => (
                    <Grid item xs={4} key={index}>
                        <ProductItem id={index}/>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}

export default ProductList;
