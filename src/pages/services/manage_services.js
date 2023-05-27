// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

// ==============================|| Manage Services ||============================== //
function ManageServices() {

  return (
    <Page title="Add Services">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </Page>
  );
}

ManageServices.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageServices;
