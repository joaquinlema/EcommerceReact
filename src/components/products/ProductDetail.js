import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProductDetail({productData, productDescription}) {

    const {thumbnail,title, price} = productData;
    const {plain_text} = productDescription;

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={thumbnail}
                alt="img"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                       {title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {price}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    
                </Box>
            </Box>
        </Card>
    );
}