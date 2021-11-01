import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { setMensaje } from '../actions/AlertActions';
import { cleanComprarProduct } from '../actions/ProductActions';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Msj({ severity, msj, openStatus }) {
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setMensaje(false, '', ''));
    dispatch(cleanComprarProduct());

  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={openStatus} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {msj}
        </Alert>
      </Snackbar>
    </Stack>
  );
}