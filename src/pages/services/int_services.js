// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

<<<<<<< Updated upstream
// ==============================|| Add Services ||============================== //
function AddServices() {
=======

// ==============================|| International Company Services ||============================== //
function IntServices() {
>>>>>>> Stashed changes
  return (
    <Page title="Add Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
<<<<<<< Updated upstream
        
=======
>>>>>>> Stashed changes
        </Grid>
      </Grid>
    </Page>
  );
}

<<<<<<< Updated upstream
AddServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddServices;
=======
IntServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default IntServices;
>>>>>>> Stashed changes
