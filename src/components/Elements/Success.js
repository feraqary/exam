import { Alert, AlertTitle, Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

const Success = () => {
  return (
    <Grid item xs={12} lg={5} spacing={gridSpacing}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Data Added Successfully!
      </Alert>
    </Grid>
  );
};

export default Success;
