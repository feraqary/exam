// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import UserList from 'pages/management/manage_user';


// ==============================|| MANAGE Users ||============================== //
function ManageUsers() {
  return (
    <Page title="Manage Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
        <UserList/>
        </Grid>
      </Grid>
    </Page>
  );
}
ManageUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageUsers;
