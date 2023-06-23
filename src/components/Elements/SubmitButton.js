// material-ui
import { Grid, Button, CardActions } from '@mui/material';
import { useFormikContext } from 'formik';

const SubmitButton = () => {
  const { submitForm, isSubmitting, resetForm } = useFormikContext();

  return (
    <Grid container justifyContent="flex-end">
      <CardActions>
        <Grid container alignItems="center" justifyContent="flex-end" spacing={2}>
          <Grid item>

            <Button variant="contained" color="secondary" type="submit" onClick={() => submitForm()} disabled={isSubmitting}>

              Submit
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={resetForm}>
              Clear
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Grid>
  );
};

export default SubmitButton;
