// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import ApexPolarChart from 'components/forms/chart/Apexchart/ApexPolarChart';

// ==============================|| Manage Leads Requests||============================== //
function ManageLeads() {
  return (
    <Page title="Manage Leads">
      <Grid container spacing={gridSpacing}>
        
        <Grid item xs={12}>
          <MainCard title="Manage Leads" />
          <Grid item xs={12} lg={8} md={6}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
          <ApexPolarChart/>
          </Grid>
          </Grid>
          </Grid>
        </Grid>
      
      </Grid>
    </Page>
  );
}

ManageLeads.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ManageLeads;
