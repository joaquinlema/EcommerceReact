import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ProductList from '../components/products/ProductList'

const MainPage = () => {

    return (
        <Box
            sx={{
                marginTop: '1%',
                padding: '2%',
                backgroundColor: 'rgb(234, 238, 243)',
            }}
        >
            <Grid container>
                <Grid item xs>
                    <ProductList />
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainPage
