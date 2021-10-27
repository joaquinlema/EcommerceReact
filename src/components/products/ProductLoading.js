import React from 'react';
import { Grid, Skeleton, Stack } from '@mui/material';

const ProductLoading = () => {
    return (
        <Grid container spacing={3}>
            {Array.from(new Array(6)).map((elem, index) => (
                <Grid item xs={4} key={index}>
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                    <Skeleton animation="wave" height={25} width="30%" style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="30%" />
                </Grid>
            ))
            }
        </Grid>
    )
}

export default ProductLoading;
