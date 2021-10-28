import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Button, CardActionArea, CardActions, CardHeader, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { lightBlue, green } from '@mui/material/colors';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

const ProductItem = ({ data }) => {

    const { id, title, price, thumbnail, shipping, address, accepts_mercadopago } = data;

    return (
        <Card
            sx={{
                backgroundColor: '#fffff',
            }}>
            <CardActionArea component={Link} to={`/productDetail/${id}`}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                            <RoomRoundedIcon />
                        </Avatar>
                    }
                    title={address.state_name}
                    subheader={address.city_name}
                    action={
                        (accepts_mercadopago) ?
                            <IconButton aria-label="settings">
                                <PaymentRoundedIcon  sx={{ color: lightBlue[500] }}/>
                            </IconButton>
                            :
                            null
                    }
                />
                <CardMedia
                    sx={{
                        width: '30%',
                        marginLeft: '30%'
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
                <Button size="small" color="primary" variant="outlined" startIcon={<InfoRoundedIcon />}>
                    <Link to={`/productDetail/${id}`} underline="none" style={{ textDecoration: 'none' }}>
                        Info
                    </Link>
                </Button>
            </CardActions>
        </Card >
    );
}

ProductItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default ProductItem;