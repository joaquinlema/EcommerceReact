import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useSelector } from 'react-redux';
import BuysList from '../components/buys/BuysList';

const BuysPage = () => {

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
                </Grid>
            </Container>
        </Box>
    );
}

export default BuysPage;
