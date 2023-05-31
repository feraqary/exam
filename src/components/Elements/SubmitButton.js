// material-ui
import { Grid, Button, CardActions } from '@mui/material';

const SubmitButton = () => {
  return (
    <Grid container justifyContent="flex-end">
      <CardActions>
        <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button variant="contained" color="secondary">
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">Clear</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Grid>
  );
};

export default SubmitButton;
