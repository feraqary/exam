// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import { gridSpacing } from 'store/constant';

import DeletedJobsTable from 'components/widget/Data/careers/deleted_careers';


// ==============================|| Careers datatable ||============================== //
function DeletedJobs() {
  return (
    <Page title="Careers">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <DeletedJobsTable title="Deleted Jobs List" />
        </Grid>
      </Grid>
    </Page>
  );
}

DeletedJobs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DeletedJobs;