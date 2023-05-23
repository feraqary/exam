// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';


// ==============================|| View Deleted Users ||============================== //
function DeletedUsers() {
  return (
    <Page title="View Deleted Users">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </Page>
  );
}

DeletedUsers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedUsers;
