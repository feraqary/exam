// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| Manage Leads Requests||============================== //
function ManageLeads() {
  return (
    <Page title="Manage Leads">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} md={6} lg={6}>
          <MainCard title="Relative Leads Per Listing"></MainCard>
        </Grid>
      </Grid>
    </Page>
  );
}

ManageLeads.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageLeads;
