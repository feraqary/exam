// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

<<<<<<< Updated upstream
// ==============================|| Add Services ||============================== //
function AddServices() {
  return (
    <Page title="Add Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        
=======

// ==============================|| Local Services ||============================== //
function LocalServices() {
  return (
    <Page title="Local Company Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
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
LocalServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LocalServices;
>>>>>>> Stashed changes
