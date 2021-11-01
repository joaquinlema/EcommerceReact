import { Grid, Skeleton } from '@mui/material'
import React from 'react';

const ProductItemLoading = () => {
    return (
        <Grid item xs={4}>
            <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
            <Skeleton animation="wave" height={25} width="30%" style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="30%" />
        </Grid>
    )
}

export default ProductItemLoading;
