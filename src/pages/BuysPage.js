import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMensaje } from '../actions/AlertActions';
import { cleanComprarProduct } from '../actions/ProductActions';
import BuysList from '../components/buys/BuysList';
import Msj from '../components/Msj';

const BuysPage = () => {
    const { compradoOk } = useSelector(state => state.ProductReducer);

    const { mensaje, severity, status } = useSelector(state => state.AlertReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if (compradoOk) { 
            dispatch(setMensaje(true, 'Compra realizada con exito', 'success')); 
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box
            sx={{
                marginTop: '3%',
                backgroundColor: 'primary.dark',
            }}
        >
            <Container maxWidth="md">
                <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        Compras
                    </Grid>
                    <Grid item xs={12}>
                        <BuysList />
                    </Grid>
                    <Grid>
                        <Msj msj={mensaje} severity={severity} status={status}/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default BuysPage;
