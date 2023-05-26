// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| Leads General Requests||============================== //
function GeneralRequests() {
  return (
    <Page title="General Requests">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="General Requests" />
        </Grid>
      </Grid>
    </Page>
  );
}

GeneralRequests.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default GeneralRequests;
