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
import LocalProjectActivities from 'components/widget/Data/add_project/project_activities';

// ==============================|| Activities Project ||============================== //
function Activities() {
  return (
    <Page title="Activities">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <LocalProjectActivities />
          {/* <MainCard title="Activities" /> */}
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
Activities.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Activities;
>>>>>>> Stashed changes
