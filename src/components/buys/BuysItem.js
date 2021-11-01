import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const BuysItem = ({producInfo}) => {
  const {thumbnail, title, price} = producInfo;
    return (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="thumb" src={thumbnail} />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               Precio: {price}$
              </Typography>
               {(new Date()).toString()}
            </React.Fragment>
          }
        />
      </ListItem>
    )
}

export default BuysItem;
