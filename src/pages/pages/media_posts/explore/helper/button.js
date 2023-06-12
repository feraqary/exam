import React from 'react';
import { Grid, Button} from '@mui/material';

export default function LabeledButton({label, children}) {
  return (
    <Button>
        <Grid container direction="row" alignItems="center">
        <Grid item>
            {children}
        </Grid>
        <Grid item>{label}</Grid>
        </Grid>
    </Button>
  );
}
