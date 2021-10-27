import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import BuysList from '../components/buys/BuysList';

const BuysPage = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 600,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}
        >
            <Container maxWidth="sm">
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
