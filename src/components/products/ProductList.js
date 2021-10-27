import { Grid, Paper } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import ProductLoading from './ProductLoading';

const ProductList = () => {

    const { searchResults, loading } = useSelector(state => state.SearchReducer);

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

            {
                loading
                    ? <ProductLoading />
                    :
                    <Grid container spacing={2}>
                        {searchResults.map((elem, index) => (
                            <Grid item xs={4} key={index}>
                                <ProductItem id={index} />
                            </Grid>
                        ))}
                    </Grid>
            }
        </Paper>
    )
}

export default ProductList;
