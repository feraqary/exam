// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/ui-component/Page';
import MainCard from 'components/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| Add Lead Contact||============================== //
function LeadContact() {
  return (
    <Page title="Lead Contact">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <MainCard title="Add Lead Contact" />
        </Grid>
      </Grid>
    </Page>
  );
}

LeadContact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default LeadContact;
