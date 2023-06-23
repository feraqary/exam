// material-ui
import { Grid, Button, CardActions } from '@mui/material';
import { useFormikContext } from 'formik';
const SubmitButton = ({ clear, submit, disabled }) => {

  const { submitForm } = useFormikContext();


  return (
    <Grid container justifyContent="flex-end">
      <CardActions>
        <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
          <Grid item>
            <Button disabled={disabled} variant="contained" color="secondary" onClick={() => submitForm()}>
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
