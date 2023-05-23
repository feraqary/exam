// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

// ==============================|| Add Users ||============================== //
function AddUsers() {
  return (
    <Page title="Add Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Page>
  );
}

AddUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default AddUsers;
