// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';
import ManDeleteUsers from './components/deleted_user';

// ==============================|| View Deleted Users ||============================== //
function DeletedUsers() {
  return (
    <Page title="View Deleted Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <ManDeleteUsers />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedUsers;
