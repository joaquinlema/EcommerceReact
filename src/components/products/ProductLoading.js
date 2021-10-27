import React from 'react';
import { Grid, Skeleton, Stack } from '@mui/material';

const ProductLoading = () => {
    return (
        <Grid container>
            {Array.from(new Array(6)).map((elem, index) => (
                <Grid item xs={4} key={index}>
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={210} height={118}/>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="rectangular" width={210} height={118} />
                    </Stack>
                </Grid>
            ))
            }
        </Grid>
    )
}

export default ProductLoading;
