import { Alert, Grid } from '@mui/material';
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import ProductLoading from './ProductLoading';

const ProductList = () => {

    const { searchResults, loading } = useSelector(state => state.SearchReducer);

    if (loading) return <ProductLoading />

    if (searchResults.length === 0) return <Alert severity="info">Por favor realice una busqueda!!!!</Alert>

    return (
        <Fragment>

            <Grid container spacing={1} alignItems="stretch">
                {searchResults.map((elem, index) => (
                    <Grid item xs={4} key={index}>
                        <ProductItem data={elem} />
                    </Grid>
                ))}
            </Grid>
        </Fragment>
    )
}

export default ProductList;
