import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActions, CardContent, Divider, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { green } from '@mui/material/colors';

export default function ProductDetail({ productData, productDescription }) {

    const { thumbnail, title, price, warranty, original_price, sale_terms, available_quantity, accepts_mercadopago, shipping, seller_address } = productData;
    const { plain_text } = productDescription;
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <CardMedia sx={{ width: '100%', }}
                    component="img"
                    image={thumbnail}
                    alt="img"
                />
            </Grid>
            <Grid item xs={8}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16, color: '#00a650' }} gutterBottom>
                            Precio: {price}$
                        </Typography>
                        <Typography sx={{ fontSize: 14, textDecoration: 'line-through', color: '#999' }} color="text.secondary" gutterBottom>
                            Precio Original: {original_price}$
                        </Typography>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                             {(available_quantity > 0 ? 'En Stock' : 'Agotado')}
                        </Typography>
                        {sale_terms.length > 0 && sale_terms.map((elem, index) => (
                            <Typography key={index} variant="body2">
                                {elem.name} : {elem.value_name}
                            </Typography>
                        ))}

                        <Typography variant="h6" gutterBottom component="div" color={green[900]}>
                            {(shipping.free_shipping) ? 'Envio Gratis' : null}
                        </Typography>
                        <br></br>
                        <Divider />
                        <br></br>
                        <Typography sx={{ fontSize: 14, color: '#999' }} color="text.secondary" gutterBottom>
                            Localidad:
                        </Typography>
                        <Typography variant="body1" component="div">
                            {seller_address.city.name}, {seller_address.state.name}, {seller_address.country.name}
                        </Typography>
                        <br></br>
                        <Divider />
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" disabled={(available_quantity < 1)}>Comprar</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={12}>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Mas Informacion
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{warranty}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {plain_text}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Grid>
        </React.Fragment>
    );
}