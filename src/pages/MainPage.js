import { Grid } from '@mui/material'
import React from 'react'
import ProductList from '../components/products/ProductList'

const MainPage = () => {
    return (
        <Grid container>
            <Grid item xs>
                filtros  quizas
            </Grid>
            <Grid item xs={10}>
                <ProductList />
            </Grid>
        </Grid>
    )
}

export default MainPage
