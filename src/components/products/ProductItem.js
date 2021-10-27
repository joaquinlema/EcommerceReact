import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { green } from '@mui/material/colors';

const ProductItem = ({ data }) => {

    const { id, title, price, thumbnail, shipping } = data;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    sx={{
                        width: '40%',
                        marginLeft:'27%'
                    }}
                    component="img"
                    height="140"
                    image={thumbnail}
                    alt="image"
                    width='40%'
                />
                <CardContent sx={{ height: '100%' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div" color="text.secondary">
                        $ {price}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom color={green[900]}>
                        {(shipping.free_shipping) ? 'Envio Gratis' : null}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <Link to={`/productDetail/${id}`} underline="none" style={{ textDecoration: 'none' }}>
                        More
                    </Link>
                </Button>
            </CardActions>
        </Card>
    );
}

ProductItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ProductItem;