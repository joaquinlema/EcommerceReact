import { Grid, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cleanProduct, getSelectedProduct } from '../actions/ProductActions';
import ProductDetail from '../components/products/ProductDetail';

const DetailPage = ({ match }) => {

    const { params: { id } } = match;
    const { loadingProduct, productData, productDescription } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();

    React.useEffect(() => {

        dispatch(getSelectedProduct(id));

        return () => {
            dispatch(cleanProduct());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (loadingProduct) return  <Box sx={{ width: '100%' }}><LinearProgress /></Box>

    return (
        <Box sx={{ flexGrow: 1, padding: '2%' }}>
            <Grid container spacing={3}>
                <ProductDetail productData={productData} productDescription={productDescription} />
            </Grid>
        </Box>
    )
}

export default DetailPage;
