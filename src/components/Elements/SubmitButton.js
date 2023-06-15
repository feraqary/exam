// material-ui
import { Grid, Button, CardActions } from '@mui/material';

const SubmitButton = ({ clear, submit, disabled }) => {
  return (
    <Grid container justifyContent="flex-end">
      <CardActions>
        <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button disabled={disabled} variant="contained" color="secondary" onClick={submit}>
              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={clear}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Grid>
  );
};

export default SubmitButton;
