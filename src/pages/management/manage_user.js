// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';


// ==============================|| MANAGE Users ||============================== //
function ManageUsers() {
  return (
    <Page title="Manage Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </Page>
  );
}
ManageUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageUsers;
